const express = require('express')
const loginUser = require('../controller/loginController')
const validateLogin  = require('../middleware/loginValidation')

const router = express.Router()

router.post("/login", validateLogin, loginUser)

module.exports = router