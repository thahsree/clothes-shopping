const {  checkOutProduct, addToCart, addToWishList } = require('../controller/orders')

const router = require('express').Router()


router.put('/checkout',checkOutProduct);

router.put('/addToCart',addToCart);

router.put('/wishlist',addToWishList);

module.exports = router