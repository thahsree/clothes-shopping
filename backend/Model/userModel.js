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
    wishList:[{productID:String,size: String}],
    cart:[{productID:String,size: String, nos:String} ],
    recentOrders:[{productID:String,size: String, nos:String} ],
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
       
    },
    country:{
        type:String,
        
    }
},{
    timestamps:true
}
)

const User = mongoose.model("User",UserSchema)
module.exports = User