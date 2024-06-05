const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    productID: String,
    size: String,
    nos: Number
}, { timestamps: true });

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
    recentOrders: [itemSchema], // Using the subdocument schema for recentOrders
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
       
    },
    country:{
        type:String,
        
    },
    address:[String]
},{
    timestamps:true
}
)

const User = mongoose.model("User",UserSchema)
module.exports = User