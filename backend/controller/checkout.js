const Products = require('../Model/productsModel');
const User = require('../Model/userModel');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Orders = require('../Model/ordersModel');
const { log } = require('console');


const checkOutProduct = async (req, res) => {


    try {
        const { itemArr, amount, currency, receipt , address , qty } = req.body;
        const username = req.username; // jwt assigned this username check verifyJWT.js for more..

        const foundUser = await User.findOne({ username });

        if (!foundUser) {
            return res.sendStatus(403); // valid auth but token expired
        }

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


        for(const item of itemArr){

            
            const foundProduct = await Products.findOne({ _id: item.id });

            // Ensure the product was found
            if (!foundProduct) {
                console.log(`Product with ID ${item.id} not found.`);
                continue;
            }

            const newOrder = {
                
                paymentID:'pending',
                customerID : foundUser._id,
                orderID : order.id,
                address,
                paymentStatus:'pending',
                paymentType:'waiting',
                qty : item.count,
                itemID: foundProduct._id,
                deliveryStatus:'waiting for payment',
                amount:0

            }
            await Orders.create(newOrder)

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



        const orders = await Orders.find({orderID:razorpay_order_id})
        
        // Update stocks
        await Promise.all(itemArr.map(async (item) => {
            const foundProduct = await Products.findOne({ _id: item.id });
       
            foundProduct.availableStock[item.size] -= parseInt(item.count);

            await foundProduct.save();
        }));


        var instance = new Razorpay({
            key_id: process.env.RAZOR_PAY_KEY_ID,
            key_secret: process.env.RAZOR_PAY_KEY_SECRET,
          });

          let payment;
          try {
              payment = await instance.payments.fetch(razorpay_payment_id);
              console.log('paymentStatus', payment);
          } catch (error) {
              console.error('Error fetching payment status from Razorpay:', error);
              return res.status(error.statusCode || 500).json({ message: error.error.description || 'Error validating payment status with Razorpay' });
          }

        if (payment.status === 'captured') {
            await Promise.all(orders.map(async (order) => {
                order.paymentID = payment.id;
                order.paymentStatus = payment.status;
                order.paymentType = payment.method;
                order.deliveryStatus = 'waiting for seller confirmation';
                order.amount = payment.amount
                await order.save();
            }));
        }
        

        // Update user recentOrders and cart
        const updatedRecentOrders = itemArr.map((item) => ({
            
            productID: item.id,
            size: item.size,
            nos: item.count,
            orderID: razorpay_order_id
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
