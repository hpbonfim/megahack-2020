const express = require("express")
const router = express.Router()

const contractController = require('../controllers/contracts')
const verifyController = require('../controllers/verify')

//CONTRACTS 
router.post("/encrypt", contractController.contract_encrypt)
router.post("/decrypt", contractController.contract_decrypt)

//SMS TWILIO
router.post("/verify", verifyController.user_verify)
router.post("/send", verifyController.user_sendVerification)

module.exports = router