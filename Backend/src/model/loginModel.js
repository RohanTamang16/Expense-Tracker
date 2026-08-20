const pool = require("../database/db");

const loginUserService = async (email) => {
    const result = await pool.query(
        `
        SELECT id, name, email, phone_number, password
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    return result.rows[0];
};

module.exports = loginUserService;