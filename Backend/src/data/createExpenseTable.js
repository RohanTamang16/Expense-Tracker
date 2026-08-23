const pool = require("../database/db");

const createExpenseTable = async () => {
	try {
		const queryText = `
        CREATE TABLE IF NOT EXISTS expense (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        category VARCHAR(100) NOT NULL,
        amount NUMERIC(12, 2) NOT NULL,
        description TEXT,
        expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_expense_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        )
        `;
		await pool.query(queryText);

		console.log("Expense table created if not exists");
	} catch (error) {
		console.error("Error creating expense table", error);
	}
};

module.exports = createExpenseTable;