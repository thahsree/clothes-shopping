const Products = require('../Model/productsModel')
const User = require('../Model/userModel');


const addToWishList = async(req,res)=>{

    try {
        const { id } = req.query
        const username = req.username  // jwt assigned this username check verifyJWT.js for more..

        const foundUser =await User.findOne({username:username})
        const foundProduct = await Products.findOne({_id:id})


        if(!foundUser){
            return res.sendStatus(403) //valid auth but token expire
        }
        if(!foundProduct){
            return res.sendStatus(404)  //item not found
        }

        //check item already in wish list

        const isItemInList = foundUser?.wishList?.findIndex(item =>  item?.productID === id)

        if(isItemInList >-1){

            return res.status(409).json({"message":"Item Already in WishList"})
        }

        
        const updatedWishList = {
            productID:foundProduct._id
        }

        foundUser.wishList.push(updatedWishList)

        await foundUser.save();  // to update cart schema of user

        return res.status(200).json({"message":"Added to Wish List",wishList:foundUser.wishList});

    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }

    
}

const getWishListItems = async(req,res)=>{

    try {

        const foundUser =await User.findOne({username:req.username})

        if(!foundUser){

            return res.sendStatus(403) // 
        }

        return res.status(200).json(foundUser.wishList)
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(500)

    }
}

const deleteWishlistItem = async(req,res)=>{

    try {
        
        const foundUser = await User.findOne({username:req.username})  

        const foundItem = foundUser.wishList.some(item => item._id == req.params.id); //sorting out unwanted item

        if (!foundItem) {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        if(!foundItem){

            return res.status(404).json({"message":"item not found"})
        }
        
        foundUser.wishList = foundUser.wishList.filter(item => item._id != req.params.id)

        await foundUser.save()

        return res.status(200).json({"message":"item Deleted","Count":foundUser.wishList.length,wishList:foundUser.wishList})

    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}
module.exports = {addToWishList , getWishListItems , deleteWishlistItem}