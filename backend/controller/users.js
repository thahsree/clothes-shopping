const User = require('../Model/userModel')


const getUsers = async(req,res)=>{

   try {
    const foundUsers =await  User.find({})

    return res.status(200).json(foundUsers)
   } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
   }
}


module.exports = {getUsers}