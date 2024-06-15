const { register, login, logout } = require('../controller/auth')
const router = require('express').Router()


router.post('/register',register)
router.post('/login',login)

router.post('/logout',logout)
// router.post('/logout')

module.exports = router