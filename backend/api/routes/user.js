const express = require("express")
const router = express.Router()

// CONTROLLER
const UserController = require('../controllers/user')

//USERS ROUTES
router.post("/register", UserController.user_register)
router.post("/login", UserController.user_login)

module.exports = router