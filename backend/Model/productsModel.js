const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    brandName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    offerPrice:{
        type:Number
    },
    gender:{
        type:String,
        required:true
    },
    availableStock: {
        S: {
            type: Number,
            default: 0
        },
        M: {
            type: Number,
            default: 0
        },
        L: {
            type: Number,
            default: 0
        },
        XL: {
            type: Number,
            default: 0
        },
        XXL: {
            type: Number,
            default: 0
        }
    },
    productDetails:{
        type:[String],
        required:true
    },
    sizeAndFit:{
        type:[String],
        required:true
    },
    materialAndCare:{
        type:[String],
        required:true
    },
    categories:{
        type:[String],
        required:true
    },
    images: {
        type: [String],
        default: []
    }


},
{
    timestamps:true
})

const Products = mongoose.model("Product",ProductSchema)

module.exports = Products

