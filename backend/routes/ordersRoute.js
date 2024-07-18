const { getOrders, updateOrder, getUserOrders, getOrder } = require('../controller/orders')
const { verifyJWT } = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')

const router = require('express').Router()


router.get('/',verifyJWT,getOrders)

router.get('/userOrders',verifyJWT,getUserOrders)

router.get('/:id',verifyJWT,getOrder)

router.put('/:id',verifyJWT,updateOrder)


module.exports = router