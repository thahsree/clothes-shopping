const User = require('../Model/userModel')


const getUsers = async(req,res)=>{

   try {
    const foundUsers =await  User.find({})

     res.status(200).json(foundUsers)
   } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
   }
}

const getUser = async(req,res)=>{
   try {
      const foundUser = await User.find({_id:req.params.id})
      
      if(req.username === foundUser[0].username){

         const {password,email,...others} = foundUser[0]._doc


         return res.status(200).json({details:others})
      }else{
         return res.sendStatus(401)
      }
      
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
   }
}

const updateUser = async(req,res)=>{

   try {
      
      const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})

      res.status(200).json(updatedUser)
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
   }
}

const updateAddress = async(req,res)=>{

   try {
      
      console.log("REACHED UPDATE ADDRESS");
      const foundUser = await User.findById(req.params.id)

      if(!foundUser){
         return res.status(404).json({"Message":"User Not Found"})
      }

      console.log(req.body);
      foundUser.address.push(req.body)

      await foundUser.save()

      res.sendStatus(200);

   } catch (error) {
      console.log(error);
      return res.status(500).json({error:'Internal Server Error'})
   }
}

module.exports = {getUsers , getUser , updateUser , updateAddress}