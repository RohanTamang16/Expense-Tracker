const pool = require('../database/db')

const getTransactionService = async(userId) => {
    const result = await pool.query(
        `
        SELECT
            id,
            user_id,
            income_source AS source,
            amount,
            description,
            income_date AS transaction_date,
            'income' AS type
        FROM income
        WHERE user_id = $1

        UNION ALL

        SELECT
            id,
            user_id,
            category AS source,
            amount,
            description,
            expense_date AS transaction_date,
            'expense' AS type
        FROM expense
        WHERE user_id = $1

        ORDER BY transaction_date DESC
        LIMIT 5;
        `,
        [userId]
    );
    return result.rows;
};

module.exports = getTransactionService;