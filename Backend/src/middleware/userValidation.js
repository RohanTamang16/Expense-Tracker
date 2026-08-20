const Joi = require('joi')

const signupSchema = Joi.object({
    name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
        "string.empty" : "Name is required",
        "string.min" : "Name must be at least 2 characters",
        "any.required" : "Name is require"
    }),
    
    email: Joi.string()
    .email()
    .max(100)
    .required()
    .messages({
        "string.empty" : "Email is required",
        "string.email" : "Please enter a valid email",
        "any.required" : "Email is required"
    }),

    phone_number : Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
        "string.empty" : "Password is required",
        "string.pattern.base" : "Phone number must be exactly 10 digits",
        "any.required" : "Phone number is required"
    }),

    password: Joi.string()
    .min(8)
    .max(100)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .messages({
        "string.empty" : "Password is required",
        "string.min" : "Password must be 8 characters",
        "string.pattern.base" : "Password must contain uppercase, lowercase, number and special character",
        "any.required" : "Password is required"
    }),

    confirmPassword : Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
        "any.only" : "Passwords do not match",
        "any.required" : "Confirm password is required",
    }),
})

const validateUser = (req, res, next ) =>{
    const {error} = signupSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            status: 400,
            message: error.details[0].message,
            data : null,
        })
    }
    next()
}

module.exports = validateUser