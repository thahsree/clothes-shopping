const Orders = require('../Model/ordersModel');
const Products = require('../Model/productsModel')
const User = require('../Model/userModel')

const getUserOrders = async(req,res)=>{

    try{

        const username = req.username

        console.log(username);

        const foundUser =await User.findOne({username:username}) 

        
        const recentOrders = foundUser.recentOrders
       
        
        

        const newData = await Promise.all(recentOrders.map((async(item)=>{
            

            const foundOrder = await Orders.aggregate([{
                $match:{
                    orderID:item.orderID,
                    itemID:item.productID
                }
            }])
            // const foundOrder = await Orders.findOne({orderID:item.orderID})

            const foundProduct = await Products.find({_id:item.productID})

            return{order:foundOrder[0] ,product:foundProduct }
        })))
        
        res.status(200).json(newData)
    }catch (error){
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getOrders = async(req,res)=>{

    try {
        
        const response = await Orders.find()

        return res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'})
    }
}

const updateOrder = async(req,res)=>{

    try{
        const orderID = req.params.orderID
        const itemID = req.params.itemID

        
        const foundOrder = await Orders.aggregate([{
            $match:{
              orderID,
              itemID
            }
        }])


        console.log("FOUND ORDER",foundOrder);

        if(foundOrder.length === 0 ){
            return res.status(404).json({message:"Item Not Found"});
        }

        const orderToUpdate = foundOrder[0]

        console.log("ORDER TO UPDATE",orderToUpdate)

        const updatedOrder = await Orders.findByIdAndUpdate(
            orderToUpdate._id,
            {$set: req.body},
            {new:true}
        )

        
        // const updatedOrder = await Orders.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})

        return res.status(200).json(updatedOrder);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getOrder = async(req,res)=>{

    try{

        const id = req.params.id
        const foundOrder = await Orders.find({_id:id})

        return res.status(200).json(foundOrder)
    }catch(error){

        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}

const getOrderByOrderID = async(req,res)=>{

    
}

const cancelOrder = async(req,res)=>{

    try{

        const orderID = req.params.orderID
        const itemID = req.params.itemID

        const foundOrder = await Orders.aggregate([{
            $match:{
                orderID,
                itemID
            }
        }])

        const orderToUpdate = foundOrder[0]

        console.log('OrderToUpdate',orderToUpdate);

        const newUpdate = {
            deliveryStatus:'order cancelled'
        }
        const updatedOrder = await Orders.findByIdAndUpdate(
            orderToUpdate._id,
            {$set: newUpdate},
            {new:true}
        )

        return res.status(200).json(updatedOrder);

    }catch(error){
        res.status(500).json({"message":"Internal Server Error"});
    }
}
module.exports= {getUserOrders , updateOrder , getOrders , getOrder , cancelOrder};