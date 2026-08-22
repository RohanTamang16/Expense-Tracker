const express = require('express')
const {createIncome} = require('../controller/incomeController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/income',authMiddleware, createIncome)

module.exports= router