const { register, login } = require('../controller/auth')
const router = require('express').Router()


router.post('/register',register)
router.post('/login',login)
// router.post('/logout')

module.exports = router