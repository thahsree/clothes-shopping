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
         return res.status(200).json(foundUser)
      }else{
         return res.sendStatus(401)
      }
      
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
   }
}


module.exports = {getUsers , getUser}