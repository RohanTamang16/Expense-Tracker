const pool = require("../database/db");

const createUserTable = async () => {
    try {
        const queryText = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(100) NOT NULL UNIQUE,
                name VARCHAR(100) NOT NULL,
                phone_number VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await pool.query(queryText);

        console.log("User table created if it did not exist");
    } catch (error) {
        console.error("Error creating user table:", error);
    }
};

module.exports = createUserTable;