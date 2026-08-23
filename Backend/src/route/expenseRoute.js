const express = require('express')
const {createExpense, getExpense} = require('../controller/expenseController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/expense', authMiddleware, createExpense)
router.get('/expense', authMiddleware, getExpense)

module.exports = router