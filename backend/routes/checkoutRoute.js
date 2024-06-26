const { checkOutProduct, validateOrder } = require("../controller/checkout")
const  { verifyJWT }  = require("../middleware/verifyJWT")
const  verifyRoles =  require("../middleware/verifyRoles")
const ROLES_LIST = require('../config/roles');
const router = require('express').Router()



router.post('/checkoutProduct',verifyJWT,checkOutProduct);

router.post('/validateOrder',verifyJWT ,validateOrder )
module.exports = router