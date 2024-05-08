const Products = require('../Model/productsModel')
const User = require('../Model/userModel');


const checkOutProduct = async(req,res)=>{

    try {
        const { id ,size, count} = req.query
        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(403) //valid auth but token expire
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }
        

        const updatedCount = foundProduct.availableStock[size] -= parseInt(count);
        
        if( updatedCount <0){
            return res.sendStatus(410) // no longer available
        }

        const updatedAvailableStock = {
            ...foundProduct.availableStock,
            [size]: updatedCount
        };
        
        const updatedRecentOrders = {
            productID:foundProduct._id,
            size:size,
            nos:count

        }
        
        foundProduct.availableStock = updatedAvailableStock;

        // Save the updated product
        const updatedProduct = await foundProduct.save();

        foundUser.recentOrders.push(updatedRecentOrders)

        await foundUser.save()
        return res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}

const addToCart = async(req,res)=>{

    try {
        console.log('>>>>REACHED ADD TO CART');
        const { id ,size, count} = req.query
        console.log(count);

        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(403) //valid auth but token expire
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }

        const productStock = foundProduct.availableStock[size]
         
        if(productStock <=0){   // checking product stock 
            return res.sendStatus(410)
        }
        
        const updatedCart = {
            productID:foundProduct._id,
            size:size,
            nos:count
        }

        foundUser.cart.push(updatedCart)

        await foundUser.save();  // to update cart schema of user

        return res.status(200).json(updatedCart);

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}

const addToWishList = async(req,res)=>{

    try {
        const { id ,size, count} = req.query
        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(403) //valid auth but token expire
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }

        const productStock = foundProduct.availableStock[size]
         
        if(productStock <=0){   // checking product stock 
            return res.sendStatus(410)
        }
        
        const updatedWishList = {
            productID:foundProduct._id,
            size:size,
            nos:count
        }

        foundUser.wishList.push(updatedWishList)

        await foundUser.save();  // to update cart schema of user

        return res.status(200).json(updatedWishList);

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}
module.exports = {checkOutProduct , addToCart , addToWishList}