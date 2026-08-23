const {expenseFormService, getExpenseService} = require('../model/expenseModel')

const handleResponse = require('../utils/handleResponse')

const createExpense = async ( req, res, next) => {
    const {
        amount,
        category,
        expense_date,
        description
    } = req.body

    try {
        const userId = req.user.id;

        const newExpense = await expenseFormService(
            userId,
            amount,
            category,
            expense_date,
            description
        );
         handleResponse(
            res,
            201,
            "Expense data created successfully",
            newExpense
         )
    } catch (error) {
        next(error)
    }
}

const getExpense = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const expense = await getExpenseService(userId);

        if(!expense || expense.length === 0) {
            return handleResponse(
                res,
                404,
                "Expense not found"
            )
        }
        handleResponse(
            res,
            201,
            "Expense data fetched successfully",
            expense
        )
    } catch (error) {
        next(error)
    }
}

module.exports = {createExpense, getExpense}