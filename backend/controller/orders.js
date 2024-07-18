const Orders = require('../Model/ordersModel');
const Products = require('../Model/productsModel')
const User = require('../Model/userModel')

const getUserOrders = async(req,res)=>{

    try{

        console.log("REACHED BEFORE USER");
        const username = req.username

        console.log(username);

        const foundUser =await User.findOne({username:username}) 

        console.log(foundUser);
        const recentOrders = foundUser.recentOrders
       
        console.log(recentOrders);
        

        const newData = await Promise.all(recentOrders.map((async(item)=>{
            

            const foundOrder = await Orders.findOne({orderID:item.orderID})

            const foundProduct = await Products.find({_id:item.productID})

            return{order:foundOrder ,product:foundProduct }
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
        const id = req.params.id
        

        const updatedOrder = await Orders.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})

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
module.exports= {getUserOrders , updateOrder , getOrders , getOrder};