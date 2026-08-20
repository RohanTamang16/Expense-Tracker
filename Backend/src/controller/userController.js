const {createUserService, getUserService} = require('../model/userModel')
const handleResponse = require('../utils/handleResponse')

const createUser = async (req, res, next) => {
    const { name, email, phone_number, password } = req.body;

    try {
        const newUser = await createUserService(
            name,
            email,
            phone_number,
            password
        );

        handleResponse(
            res,
            201,
            "User created Successfully",
            newUser
        );

    } catch (error) {
        next(error);
    }
};
const getUser = async (req, res, next) => {
    try {
        const user = await getUserService(req.params.id)
        if(!user) return handleResponse(
            res,
            404,
            "User not found"
        )
    } catch (error) {
        next(error)
    }
}

module.exports = {createUser, getUser}