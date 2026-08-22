const pool = require('../database/db');

const incomeFormService = async (
    userId,
    amount,
    income_source,
    income_date,
    description
) => {

    const result = await pool.query(
        `
        INSERT INTO income (
            user_id,
            amount,
            income_source,
            income_date,
            description
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING
            id,
            user_id,
            amount,
            income_source,
            income_date,
            description
        `,
        [
            userId,
            amount,
            income_source,
            income_date,
            description
        ]
    );

    return result.rows[0];
};


const getIncomeService = async (userId) => {

    const result = await pool.query(
        `
        SELECT
            id,
            user_id,
            amount,
            income_source,
            income_date,
            description
        FROM income
        WHERE user_id = $1
        ORDER BY income_date DESC
        `,
        [userId]
    );

    return result.rows;
};


module.exports = {
    incomeFormService,
    getIncomeService
};