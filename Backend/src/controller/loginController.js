const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUserService = require('../model/loginModel');
const handleResponse = require('../utils/handleResponse');

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await loginUserService(email);

        if (!user) {
            return handleResponse(
                res,
                401,
                "Invalid email or password"
            );
        }

        // Compare entered password with hashed password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return handleResponse(
                res,
                401,
                "Invalid email or password"
            );
        }

        // Create JWT
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return handleResponse(
            res,
            200,
            "Login successful",
            {
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone_number: user.phone_number
                }
            }
        );

    } catch (error) {
        next(error);
    }
};

module.exports = loginUser;