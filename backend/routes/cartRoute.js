const ROLES_LIST = require('../config/roles');
const {  checkOutProduct, addToCart, addToWishList, getCartItems } = require('../controller/cart');
const { verifyJWT } = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');

const router = require('express').Router()



router.get('/',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),getCartItems )

router.put('/addToCart',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),addToCart);



module.exports = router