const getTransactionService = require('../model/transactionModel')
const handleResponse = require('../utils/handleResponse')

const getTransaction = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const transaction = await getTransactionService(userId);

        if(!transaction || transaction.length === 0){
            return handleResponse(
                res,
                404,
                "Transaction not found"
            )
        }
        handleResponse(
            res,
            201,
            "Transaction fetched successfully", transaction
        )
    } catch (error) {
        next(error)
    }
}

module.exports = getTransaction;