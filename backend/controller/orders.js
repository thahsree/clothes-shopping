const Products = require('../Model/productsModel')
const User = require('../Model/userModel');


const addToCart = async(req,res)=>{

    try {
        const { id ,size, count} = req.query
        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(401) //Unauthorized
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }
        

        const updatedCount = foundProduct.availableStock[size] -= parseInt(count);
        
        if(updatedCount <= 0){
            return res.sendStatus(410) // no longer available
        }

        const updatedAvailableStock = {
            ...foundProduct.availableStock,
            [size]: updatedCount
        };
        
        foundProduct.availableStock = updatedAvailableStock;

        // Save the updated product
        const updatedProduct = await foundProduct.save();

        return res.status(200).json(updatedProduct);

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}

module.exports = {addToCart}