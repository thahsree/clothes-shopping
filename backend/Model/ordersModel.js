const mongoose = require('mongoose');
const Schema = mongoose.Schema()

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
    }

})