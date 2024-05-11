const Products = require('../Model/productsModel') 

const getItems = async(req,res)=>{

    console.log("REACHED GET ITEMS");
   
    try {
        const {...queries} = req.query

        if(queries === undefined){
            const foundItems = await Products.find({})

            if(foundItems.length <=0){
                return res.status(200).json({"message":"NO ITEMS TO SHOW "})
            }
            return res.status(200).json(foundItems)
        }

        const foundItems = await Products.find({...queries})
        if(foundItems.length <=0){
            return res.status(200).json({"message":"NO ITEMS TO SHOW "})
        }
        return res.status(200).json(foundItems)

    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}


const createItem = async(req,res)=>{

    try {
        
        const data = req.body
        const newProduct = await Products.create(data);

        res.status(200).json(newProduct)

    } catch (error) {
        console.log(error);
        res.status(500).json({"message":"Internal Server Error"})
    }
} 

const updateItem = async(req,res)=>{

    try {

       const updatedItem = await Products.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true}) 

       res.status(200).json(updatedItem)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({"message":"Internal Server Error"})
    }
}

const getItem = async (req,res)=>{

    try {

        const item =await Products.findById(req.params.id)

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json(item)
        
    } catch (error) {
        console.log(error);

        res.status(500).json({"message":"Internal Server Error"});
    }
}

const deleteItem= async (req,res)=>{

    try {
        
        await Products.findByIdAndDelete(req.params.id)

        res.status(200).json({"message":"Item Deleted Successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({"message":"Internal Server Error"})
    }
}



module.exports = {getItems ,createItem ,updateItem , getItem ,deleteItem }