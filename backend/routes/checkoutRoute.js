const { checkOutProduct } = require("../controller/checkout")
const  { verifyJWT }  = require("../middleware/verifyJWT")
const  verifyRoles =  require("../middleware/verifyRoles")
const ROLES_LIST = require('../config/roles');
const router = require('express').Router()



router.put('/checkoutProduct',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),checkOutProduct);

module.exports = router