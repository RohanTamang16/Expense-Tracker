const pool = require("../database/db");

const createIncomeTable = async () => {
	try {
		const queryText = `
        CREATE TABLE IF NOT EXISTS income (
        id SERIAL PRIMARY KEY,

        user_id INTEGER NOT NULL,

        income_source VARCHAR(100) NOT NULL,
        amount NUMERIC(12, 2) NOT NULL,
        description TEXT,
        income_date DATE NOT NULL DEFAULT CURRENT_DATE,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_income_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
)
        `;
        await pool.query(queryText)

        console.log("Income table created if it did not exists")
	} catch (error) {
		console.error("Error creating income table: ", error);
	}
};

module.exports = createIncomeTable