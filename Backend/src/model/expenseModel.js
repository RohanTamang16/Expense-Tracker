const pool = require('../database/db')

const expenseFormService = async (
    userId,
    amount,
    category,
    expense_date,
    description
) => {
    const result = await pool.query(
       `
       INSERT INTO expense (
            user_id,
            amount,
            category,
            expense_date,
            description
       )
            VALUES ($1, $2, $3, $4 ,$5)
            RETURNING 
                id,
                user_id,
                amount,
                category,
                expense_date,
                description
       ` ,
       [
        userId,
        amount,
        category,
        expense_date,
        description
       ]
    );
     return result.rows[0]
}

const getExpenseService = async (userId) =>{
    const result = await pool.query(
        `
        SELECT 
            id,
            user_id,
            amount,
            category,
            expense_date,
            description
        FROM expense
        WHERE user_id = $1
        ORDER BY expense_date DESC
        `,
        [userId]
    )
    return result.rows;
}

module.exports = { expenseFormService, getExpenseService}