const { getOrders, updateOrder, getUserOrders, getOrder, cancelOrder } = require('../controller/orders')
const { verifyJWT } = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')

const router = require('express').Router()


router.get('/',verifyJWT,getOrders)

router.get('/userOrders',verifyJWT,getUserOrders)

router.get('/:id',verifyJWT,getOrder)

router.put('/:orderID/:itemID',verifyJWT,updateOrder)

router.post('/cancelorder/:orderID/:itemID',verifyJWT,cancelOrder)


module.exports = router