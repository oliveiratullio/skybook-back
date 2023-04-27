import joi from "joi"

export const userSchema= joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password:joi.string().min(4).required()
})
export const loginSchema = joi.object({
    email:joi.string().required(),
    password:joi.string().min(4).required()
})