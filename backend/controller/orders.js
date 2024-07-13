const Orders = require('../Model/ordersModel');
const Products = require('../Model/productsModel')


const getOrders = async(req,res)=>{

    try{

        const orders = await Orders.find()

        const newData = await Promise.all(orders.map(async(item)=>{

            const foundProduct = await Products.findOne({_id:item.itemID})

            
            return {...item.toObject(), product:foundProduct}
        }))

        
        console.log(newData);
        
        res.status(200).json(newData)
    }catch (error){
        console.log(error)
    }
}


const updateOrder = async(req,res)=>{

    try{
        const id = req.params.id
        const foundOrder = await Orders.find({_id:id})

        const updatedOrder = await Orders.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})

        return res.status(200).json(updatedOrder);

    }catch(error){
        console.log(error);
    }
}

const getOrder = async(req,res)=>{

    
}

const getOrderByOrderID = async(req,res)=>{

    
}
module.exports= {getOrders , updateOrder};