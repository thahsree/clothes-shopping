const { getItems, createItem, updateItem, getItem, deleteItem, addToCart } = require('../controller/items')
const { verifyJWT } = require('../middleware/verifyJWT');

const router = require('express').Router()
const ROLES_LIST= require('../config/roles')
const verifyRoles = require('../middleware/verifyRoles')

router.get('/',getItems)

router.post('/',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),createItem)

router.put('/:id',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),updateItem)

router.get('/:id',getItem)

router.delete('/:id',verifyJWT,verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),deleteItem)





module.exports = router