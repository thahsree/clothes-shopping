const Products = require('../Model/productsModel')
const User = require('../Model/userModel');




const addToCart = async(req,res)=>{

    try {

        const { id ,size, count} = req.query

        const username = req.username  // jwt assigned this username, check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(403) 
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }

        const productStock = foundProduct.availableStock[size]
         
        if(productStock <=0){   // checking product stock 
            return res.sendStatus(410)
        }

        //checking item already there

        const isItemInCart = foundUser?.cart?.findIndex(item =>  item?.productID ===foundProduct?._id.toString())
        
        

        if(isItemInCart >-1){

            foundUser.cart[isItemInCart].nos += parseInt(count)   //increment logic
            
        }else{

            const updatedCart = {
                productID:foundProduct._id,
                size:size,
                nos:count
            }
            foundUser.cart.push(updatedCart)
        }

        await foundUser.save();  // to update cart schema of user

        const {password,email,...others} = foundUser  //destructuring for not including password and email
        return res.status(200).json({details:others});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ "message": "Internal server error" });
    }

    
}

const getCartItems = async(req,res)=>{

    try {
        const username = req.username

        const foundUser =await User.findOne({username:username})       

        if(!foundUser){
            return res.sendStatus(410) //valid auth but token expire
        }


        res.status(200).json(foundUser.cart)
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}

const deleteCartItem = async(req,res)=>{

    try {
        
        const foundUser = await User.findOne({username:req.username})  

        const foundItem = foundUser.cart.some(item => item._id == req.params.id); //sorting out unwanted item

        console.log(foundItem);

        if (!foundItem) {
            return res.status(404).json({ message: "Item not found in cart" });
        }
        
        foundUser.cart = foundUser.cart.filter(item => item._id != req.params.id)



        await foundUser.save()

        return res.status(200).json({"message":"item Deleted",cart:foundUser.cart})

    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}
module.exports = {addToCart , getCartItems ,deleteCartItem}