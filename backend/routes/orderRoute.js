const { addToCart } = require('../controller/orders')

const router = require('express').Router()


router.post('/addtocart',addToCart)


module.exports = router