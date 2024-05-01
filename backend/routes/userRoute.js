const { getUsers } = require("../controller/users")

const router = require("express").Router()



router.get('/',getUsers)


module.exports = router