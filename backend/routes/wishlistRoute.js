const { addToWishList } = require('../controller/wishList');
const { verifyJWT } = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/roles');

const router = require('express').Router()



router.put('/addToWishList',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),addToWishList);

module.exports = router