const pool = require('../database/db')

const loginUserService = async (email) => {
    const result = await pool.query(
        `SELECT id, email, phone_number, password FROM users WHERE email = $1`, [email] 
    )
};

module.exports = loginUserService