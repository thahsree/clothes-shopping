const { register, login } = require('../controller/auth')
const verifyRoles = require('../middleware/verifyRoles')
const router = require('express').Router()


router.post('/register',register)
router.post('/login',login)

module.exports = router