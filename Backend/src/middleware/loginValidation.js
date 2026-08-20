const Joi = require('joi')

const loginScheme = Joi.object({
    email: Joi.string()
    .email()
    .max(100)
    .required()
    .messages({
        "string.empty" : "Email is required",
        "string.email" : "Please enter a valid email",
        "any.required" : "Email is required"
    }),

    password: Joi.string()
    .required()
    .messages({
        "string.empty" : "Password is required",
        "any.required" : "Password is required"
    }),
})

const validateLogin = (req, res, next ) =>{
    const {error} = loginScheme.validate(req.body)

    if(error){
        return res.status(400).json({
            status: 400,
            message: error.details[0].message,
            data: null
        })
    }
    next()
}

module.exports = validateLogin;