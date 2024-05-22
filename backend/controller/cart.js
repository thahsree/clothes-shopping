const Products = require('../Model/productsModel')
const User = require('../Model/userModel');




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

        const {password,email,...others} = foundUser
        return res.status(200).json({details:others});

    } catch (error) {
        console.log(error);
        return res.sendStatus(403) //forbidden
    }

    
}

const getCartItems = async(req,res)=>{

    try {
        const username = req.username

        console.log(username);

        const foundUser =await User.findOne({username:username})

        console.log(foundUser);
       

        if(!foundUser){
            return res.sendStatus(410) //valid auth but token expire
        }

        res.status(200).json(foundUser.cart)
    } catch (error) {
        
    }
}
module.exports = {addToCart , getCartItems}