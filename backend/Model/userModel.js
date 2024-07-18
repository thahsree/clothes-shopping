const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    productID: String,
    size: String,
    nos: Number
}, { timestamps: true });
const orderSchema = new Schema({
    productID: String,
    size: String,
    nos: Number,
    orderID : String
}, { timestamps: true });
const addressSchema = new Schema({
    name:String,
    contactNumber:String,
    houseName: String,
    pincode: String,
    state:String,
    city:String, 
    country:String
});

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    roles:{
        User:{
            type:Number,
            default:4444
        },
        Seller: Number, //3333
        Admin: Number  //5555
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    wishList: [itemSchema], // Using the subdocument schema for wishList
    cart: [itemSchema], // Using the subdocument schema for cart
    recentOrders: [orderSchema], // Using the subdocument schema for recentOrders
    password:{
        type:String,
        required:true
    },
    address:[addressSchema]
},{
    timestamps:true
}
)

const User = mongoose.model("User",UserSchema)
module.exports = User