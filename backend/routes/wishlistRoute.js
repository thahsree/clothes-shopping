const { addToWishList, getWishListItems, deleteWishlistItem } = require('../controller/wishList');
const { verifyJWT } = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/roles');

const router = require('express').Router()


router.get('/',verifyJWT,getWishListItems)
router.put('/addToWishList',verifyJWT,addToWishList);

router.delete('/:id',verifyJWT,deleteWishlistItem)

module.exports = router