const {loginUserService} = require('../model/loginModel')
const handleResponse = require('../utils/handleResponse')
const generateToken = require('../utils/jwt')

const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        
        const user = await loginUserService(email, password)

        if(!user){
            return handleResponse(
                res, 
                201,
                "Invalid email or password"
            )
            const token = generateToken(user);

            return handleResponse(
                res,
                200 ,
                "Login Successfull",
                {
                    user,
                    token
                }
            )
        }
    } catch (error) {
        next(error)
    }
}

module.exports = loginUser  