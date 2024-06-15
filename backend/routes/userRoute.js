const ROLES_LIST = require("../config/roles")
const { getUsers, getUser, updateUser, updateAddress, deleteUser } = require("../controller/users")
const verifyRoles = require("../middleware/verifyRoles")
const { verifyJWT } = require('../middleware/verifyJWT');
const router = require("express").Router()



router.get('/',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),getUsers)


router.get('/:id',verifyJWT,getUser)

router.put('/:id',verifyJWT,updateUser)

router.post('/updateAddress/:id',verifyJWT,updateAddress)

router.delete('/:id',verifyJWT,deleteUser)



module.exports = router