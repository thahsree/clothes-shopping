const { getItems, createItem, updateItem, getItem, deleteItem } = require('../controller/items')

const router = require('express').Router()
const ROLES_LIST= require('../config/roles')
const verifyRoles = require('../middleware/verifyRoles')

router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.User,ROLES_LIST.Seller),getItems)

router.post('/',createItem)

router.put('/:id',updateItem)

router.get('/:id',getItem)

router.delete('/:id',deleteItem)

module.exports = router