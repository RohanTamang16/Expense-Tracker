const express = require('express')
const {createUser, getUser} = require('../controller/userController')
const validateUser = require('../middleware/userValidation')

const router = express.Router()

router.post('/signup',validateUser, createUser)

module.exports = router;