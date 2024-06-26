const Products = require('../Model/productsModel');
const User = require('../Model/userModel');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const checkOutProduct = async (req, res) => {

    // Change updation code to after validate , because item reducing if payment cancelled

    try {
        const { itemArr, amount, currency, receipt } = req.body;
        const username = req.username; // jwt assigned this username check verifyJWT.js for more..

        const foundUser = await User.findOne({ username });

        if (!foundUser) {
            return res.sendStatus(403); // valid auth but token expired
        }

        console.log(itemArr);

        // Ensure stock is available
        for (const item of itemArr) {
            const foundProduct = await Products.findOne({ _id: item.id });

            const currentCount = foundProduct.availableStock[item.size];
            
            if (currentCount < parseInt(item.count)) {
                return res.status(400).json({ message: `Insufficient stock for product ${item.id} size ${item.size}` });
            }
        }

        // Create Razorpay order
        const razorpay = new Razorpay({
            key_id: process.env.RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZOR_PAY_KEY_SECRET
        });

        const options = { amount, currency, receipt };
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(402).json({ message: "Payment Error" });
        }

        return res.status(200).json(order);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const validateOrder = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature , itemArr } = req.body;

    const username = req.username; // jwt assigned this username check verifyJWT.js for more..
    const foundUser = await User.findOne({ username });

    try {
        // Ensure all required fields are present
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ message: "Missing fields in request body" });
        }

        // Create HMAC using SHA256 and the Razorpay Key Secret
        const secret = process.env.RAZOR_PAY_KEY_SECRET;
        const sha = crypto.createHmac('sha256', secret);
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = sha.digest('hex');

        // Compare the generated signature with the received signature
        if (digest !== razorpay_signature) {
            console.log(`Digest: ${digest}`);
            console.log(`Received Signature: ${razorpay_signature}`);
            return res.status(402).json({ message: "Transaction failed: signature mismatch" });
        }

        // Update stocks
        await Promise.all(itemArr.map(async (item) => {
            const foundProduct = await Products.findOne({ _id: item.id });
       
            foundProduct.availableStock[item.size] -= parseInt(item.count);

            await foundProduct.save();
        }));

        // Update user orders and cart
        const updatedRecentOrders = itemArr.map((item) => ({
            productID: item.id,
            size: item.size,
            nos: item.count,
        }));

        foundUser.recentOrders.push(...updatedRecentOrders);
        foundUser.cart = [];
        await foundUser.save();

        // If signatures match, send success response
        res.status(200).json({
            message: "Success",
            orderID: razorpay_order_id,
            paymentID: razorpay_payment_id
        });
    } catch (error) {
        console.error("Error validating order:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { checkOutProduct, validateOrder };
