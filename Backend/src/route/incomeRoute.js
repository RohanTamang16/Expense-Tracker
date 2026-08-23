const express = require('express')
const {createIncome, getIncome} = require('../controller/incomeController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/income',authMiddleware, createIncome)
router.get('/income', authMiddleware, getIncome)

module.exports= router