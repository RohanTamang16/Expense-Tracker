const express = require('express')
const {createBudget, getBudget} = require('../controller/budgetController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/budgets', authMiddleware, createBudget)

router.get('/budgets/new', authMiddleware, getBudget)

module.exports = router