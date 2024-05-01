const { getItems, createItem, updateItem, getItem, deleteItem, addToCart } = require('../controller/items')

const router = require('express').Router()
const ROLES_LIST= require('../config/roles')
const verifyRoles = require('../middleware/verifyRoles')

router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.User,ROLES_LIST.Seller),getItems)

router.post('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),createItem)

router.put('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller,ROLES_LIST.User),updateItem)

router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.User,ROLES_LIST.Seller),getItem)

router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Seller),deleteItem)





module.exports = router