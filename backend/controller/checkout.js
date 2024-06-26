const Products = require('../Model/productsModel')
const User = require('../Model/userModel');
const Razorpay = require('razorpay')
const crypto = require('crypto')

const checkOutProduct = async(req,res)=>{

    try {
        const { productID , cartID ,size, count , amount , currency , receipt } = req.body
        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        // const foundUser =await User.findOne({username:username})
        // const foundProduct = await Products.findOne({_id:productID})


        // if(!foundUser){
        //     return res.sendStatus(403) //valid auth but token expire
        // }
        // if(!foundProduct){
        //     return res.sendStatus(404)  //item not found
        // }
        

        // const updatedCount = foundProduct.availableStock[size] -= parseInt(count);
        
        // if( updatedCount < 1 ){
        //     return res.sendStatus(410) // no longer available
        // }

        //payment razorpay
        const razorpay = new Razorpay({
            key_id:process.env.RAZOR_PAY_KEY_ID,
            key_secret:process.env.RAZOR_PAY_KEY_SECRET
        })

        const options = {
            amount,
            currency,
            receipt
        }

        const order = await razorpay.orders.create(options)

        if(!order){
            return res.status(402).json({"message":"Payment Error"})
        }


        res.status(200).json(order)
        // const updatedAvailableStock = {
        //     ...foundProduct.availableStock,
        //     [size]: updatedCount
        // };
        
        // const updatedRecentOrders = {
        //     productID:foundProduct._id,
        //     size:size,
        //     nos:count

        // }
        
        // foundProduct.availableStock = updatedAvailableStock;

        // // Save the updated product
        // const updatedProduct = await foundProduct.save();

        // foundUser.recentOrders.push(updatedRecentOrders)

        // await foundUser.save()
        // return res.status(200).json(updatedProduct , order);

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}

const validateOrder = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

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

module.exports = {checkOutProduct , validateOrder}