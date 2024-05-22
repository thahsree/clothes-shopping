const Products = require('../Model/productsModel')
const User = require('../Model/userModel');


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

module.exports = {addToWishList}