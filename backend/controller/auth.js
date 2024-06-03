const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, username ,password , phone} = req.body;

    try {
        const foundEmail = await User.findOne({ email });
        const foundUser = await User.findOne({ username });

        console.log(phone);

        if (foundEmail) {
            return res.status(405).json({ "message": "Email  already in use" });
        }else if(foundUser){
            return res.status(405).json({ "message": "Username  already in use" });
        }else if(!phone){
            return res.status(405).json({ "message": "Please enter valid Phone Number" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = {
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            password:hashedPass
        }
        await User.create(newUser);

        res.status(200).json({ "message": "User created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}

const login = async(req,res)=>{

    try {
        const {username} = req.body
        
        const foundUser = await User.findOne({username})

        if(!foundUser){
            return res.status(404).json({"message":"User Not Found"})
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password)

        if(!match){
            return res.status(404).json({"message":"Password Missmatch"})
        }

        const roles = Object.values(foundUser.roles).filter(Boolean);

        const accessToken = jwt.sign({
            "UserInfo":{
                id:foundUser.id,
                username:foundUser.username,
                roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET
        )
        const {password,email,...others} = foundUser._doc

        res.cookie('accessToken',accessToken,{httpOnly:true ,secure:true, sameSite:'None', maxAge: 24 * 60 * 60 * 1000})
        res.status(200).json({details:{...others },accessToken})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}
module.exports = { register ,login};
