const express = require('express')
const getTransaction = require('../controller/transactionController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/transaction/recent', authMiddleware, getTransaction)

module.exports = router