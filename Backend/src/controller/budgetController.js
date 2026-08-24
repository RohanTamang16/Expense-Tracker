const { budgetFormService, getBudgetService } = require("../model/budgetModel");

const handleResponse = require("../utils/handleResponse");

const createBudget = async (req, res, next) => {
    const {
        name,
        category,
        amount,
        start_date,
        end_date,
        description
    } = req.body;

    try {
        const userId = req.user.id;

        const newBudget = await budgetFormService(
            userId,
            name,
            amount,
            category,
            start_date,
            end_date,
            description
        );

        handleResponse(
            res,
            201,
            "Budget created successfully",
            newBudget
        );

    } catch (error) {
        next(error);
    }
};

const getBudget = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const budget = await getBudgetService(userId);

        if (!budget || budget.length === 0) {
            return handleResponse(
                res,
                404,
                "Budget not found"
            );
        }

        handleResponse(
            res,
            200,
            "Budget fetched successfully",
            budget
        );

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBudget,
    getBudget
};