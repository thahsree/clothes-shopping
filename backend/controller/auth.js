const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, username ,password,confirmPassword , phone , isAdmin} = req.body;

    if(password !== confirmPassword){
        return res.status(404).json({"message":"Password missmatch"})
    }

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
            password:hashedPass,
            roles:{}
        }

        if(isAdmin){
            newUser.roles.Admin = 5555
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

        res.cookie('accessToken', "HELLOOO", {
            expires: new Date(new Date().getTime() + 30 * 1000),
		    sameSite: 'strict',
		    httpOnly: true
        });
        res.status(200).json({"message":"LOGGED IN",details:{...others },accessToken})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": "Internal server error" });
    }
}


const logout = async(req,res)=>{

    try {
        
        res.clearCookie('accessToken', {
            secure: true,
            sameSite: 'None'
        });

        res.status(200).json({ "message": "Logout successful"});


    } catch (error) {
        
    }
}

module.exports = { register ,login ,logout};
