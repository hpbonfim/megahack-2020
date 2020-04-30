const express = require("express")
const router = express.Router()

const UserController = require('../controllers/user')

router.post("/register", UserController.user_register)
router.post("/login", UserController.user_login)
router.post("/verify", UserController.user_verify)
router.post("/send", UserController.user_sendVerification)


module.exports = router