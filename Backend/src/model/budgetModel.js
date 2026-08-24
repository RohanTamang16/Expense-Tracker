const pool = require("../database/db");

const budgetFormService = async (
    userId,
    name,
    amount,
    category,
    start_date,
    end_date,
    description
) => {
    const result = await pool.query(
        `
        INSERT INTO budgets (
            user_id,
            name,
            amount,
            category,
            start_date,
            end_date,
            description
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING 
            id,
            user_id,
            name,
            amount,
            category,
            start_date,
            end_date,
            description
        `,
        [
            userId,
            name,
            amount,
            category,
            start_date,
            end_date,
            description
        ]
    );

    return result.rows[0];
};

const getBudgetService = async (userId) => {
	const result = await pool.query(
		`
        SELECT 
            id,
            user_id,
            name,
            amount,
            category,
            start_date,
            end_date
        FROM budgets
        WHERE user_id = $1
        ORDER BY start_date DESC
        `,
		[userId],
	);
	return result.rows;
};

module.exports = { budgetFormService, getBudgetService };
