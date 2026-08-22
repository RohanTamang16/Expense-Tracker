const {
    incomeFormService,
    getIncomeService
} = require("../model/incomeModel");

const handleResponse = require("../utils/handleResponse");

const createIncome = async (req, res, next) => {
    const {
        amount,
        income_source,
        income_date,
        description
    } = req.body;

    try {
        // User ID should come from authenticated user
        const userId = req.user.id;

        const newIncome = await incomeFormService(
            userId,
            amount,
            income_source,
            income_date,
            description
        );

        handleResponse(
            res,
            201,
            "Income data created successfully",
            newIncome
        );

    } catch (error) {
        next(error);
    }
};


const getIncome = async (req, res, next) => {
    try {

        const userId = req.user.id;

        const income = await getIncomeService(userId);

        if (!income || income.length === 0) {
            return handleResponse(
                res,
                404,
                "User income not found"
            );
        }

        handleResponse(
            res,
            200,
            "Income data fetched successfully",
            income
        );

    } catch (error) {
        next(error);
    }
};


module.exports = {
    createIncome,
    getIncome
};