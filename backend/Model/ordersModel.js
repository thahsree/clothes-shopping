const mongoose = require('mongoose');
const Schema = mongoose.Schema

const addressSchema = new Schema({
    name:String,
    contactNumber:String,
    houseName: String,
    pincode: String,
    state:String,
    city:String, 
    country:String
});


const orderSchema = new Schema({

    paymentID:{
        type:String,
        required:true
    },
    orderID : {
        type:String,
        required:true
    },
    customerID :{
        type:String,
        required: true
    },
    address:{
        type:addressSchema,
        required :true
    },
    paymentStatus:{
        type:String,
        required:true
    },
    paymentType:{
        type:String,
        required:true
    },
    qty:{
        type: Number,
        required:true
    },
    itemID:{
        type:String,
        required:true
    },
    deliveryStatus:{
        type:String,
        required:true
    }


})

const Orders = mongoose.model("Order",orderSchema)

module.exports = Orders