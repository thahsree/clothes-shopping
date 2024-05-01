const mongoose = require('mongoose')
const Schema = mongoose.Schema
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
        Seller: Number,
        Admin: Number
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    wishList:[{productID:String,size: String}],
    cart:[{id:String,size: String, nos:String} ],
    recentOrders:[{id:String,size: String, nos:String} ],
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
},{
    timestamps:true
}
)

const User = mongoose.model("User",UserSchema)
module.exports = User