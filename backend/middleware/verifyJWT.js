const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next)=>{
    
    const authHeader = req.headers.authorization || req.headers.Authorization
    
    if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(401)

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err) return res.status(403).json({"message":"invalid token"}); //invalid token

            req.username = decoded.UserInfo.username,  // this username taking for future user validation; assigning as req.username
            req.roles = decoded.UserInfo.roles // this roles taking for future user roles;  assigning as req.roles 
        }

    )
    next()

}

module.exports = {verifyJWT}