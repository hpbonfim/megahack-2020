const express = require("express")
const router = express.Router()

// CONTROLLER
const contractController = require('../controllers/contracts')
const verifyController = require('../controllers/verify')

//CONTRACTS ROUTES
router.post("/encrypt", contractController.contract_encrypt)
router.post("/decrypt", contractController.contract_decrypt)

//SMS TWILIO ROUTES
router.post("/verify", verifyController.user_verify)
router.post("/send", verifyController.user_sendVerification)

module.exports = router