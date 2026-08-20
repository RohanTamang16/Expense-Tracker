const pool = require("../database/db");
const bcrypt = require("bcrypt");

const createUserService = async (
    name,
    email,
    phone_number,
    password
) => {

    // 1. Check whether email or phone number already exists
    const existingUser = await pool.query(
        `
        SELECT id, email, phone_number
        FROM users
        WHERE email = $1 OR phone_number = $2
        `,
        [email, phone_number]
    );

    // 2. If user exists, throw an error
    if (existingUser.rows.length > 0) {

        if (existingUser.rows[0].email === email) {
            throw new Error("Email already exists");
        }

        if (existingUser.rows[0].phone_number === phone_number) {
            throw new Error("Phone number already exists");
        }
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert new user
    const result = await pool.query(
        `
        INSERT INTO users (
            name,
            email,
            phone_number,
            password
        )
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, phone_number
        `,
        [name, email, phone_number, hashedPassword]
    );

    return result.rows[0];
};

const getUserService = async (id) => {
    const result = await pool.query(
        `
        SELECT id, name, email, phone_number
        FROM users
        WHERE id = $1
        `,
        [id]
    );

    return result.rows[0];
};

module.exports = {createUserService, getUserService};