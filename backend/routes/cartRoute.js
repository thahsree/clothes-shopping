const { verify } = require('jsonwebtoken');
const ROLES_LIST = require('../config/roles');
const {  checkOutProduct, addToCart, addToWishList, getCartItems, deleteCartItem } = require('../controller/cart');
const { verifyJWT } = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');

const router = require('express').Router()



router.get('/',verifyJWT,getCartItems )

router.put('/addToCart',verifyJWT,addToCart);

router.delete('/:id',verifyJWT,deleteCartItem)

module.exports = router