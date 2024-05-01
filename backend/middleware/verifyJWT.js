const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next)=>{
    
    const token = req.cookies.access_token

    console.log('token',token);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err) return res.status(403).json({"message":"invalid token"}); //invalid token

            req.user = decoded.UserInfo.username,
            req.roles = decoded.UserInfo.roles

        }

    )

    next()

}

module.exports = {verifyJWT}