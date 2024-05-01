const verifyRoles = (...allowedRoles)=>{  //JWT assiging req.roles and user.Taking roles here for checking wheather this person is admin or user or seller 

    return (req,res,next)=>{
        if(!req?.roles ) return res.sendStatus(401)

        const rolesArray = [...allowedRoles]

        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val===true)
        if(!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles;