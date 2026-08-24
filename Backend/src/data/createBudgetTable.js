const pool = require("../database/db");

const createBudgetTable = async () => {
    try {
        const queryText = `
            CREATE TABLE IF NOT EXISTS budgets (
                id SERIAL PRIMARY KEY,

                user_id INTEGER NOT NULL,

                name VARCHAR(100) NOT NULL,

                category VARCHAR(100),

                amount NUMERIC(12, 2) NOT NULL,

                description TEXT,

                start_date DATE NOT NULL DEFAULT CURRENT_DATE,

                end_date DATE NOT NULL,

                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                CONSTRAINT fk_budget_user
                    FOREIGN KEY (user_id)
                    REFERENCES users(id)
                    ON DELETE CASCADE
            )
        `;

        await pool.query(queryText);

        console.log("Budget table created if not existed");

    } catch (error) {
        console.error("Error creating budget table:", error);
    }
};

module.exports = createBudgetTable;