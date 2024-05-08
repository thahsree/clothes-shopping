const ROLES_LIST = require('../config/roles');
const {  checkOutProduct, addToCart, addToWishList } = require('../controller/orders');
const { verifyJWT } = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');

const router = require('express').Router()


router.put('/checkout',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),checkOutProduct);

router.put('/addToCart',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),verifyJWT,addToCart);

router.put('/wishlist',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),addToWishList);

module.exports = router