const { getOrders, updateOrder } = require('../controller/orders')
const { verifyJWT } = require('../middleware/verifyJWT')

const router = require('express').Router()


router.get('/',verifyJWT,getOrders)

router.put('/:id',verifyJWT,updateOrder)


module.exports = router