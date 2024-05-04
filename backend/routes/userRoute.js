const ROLES_LIST = require("../config/roles")
const { getUsers } = require("../controller/users")
const verifyRoles = require("../middleware/verifyRoles")

const router = require("express").Router()



router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),getUsers)


module.exports = router