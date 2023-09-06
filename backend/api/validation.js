import joi from '@hapi/joi'

const schema={
    username:joi.string().min(6).required(),
    name: joi.string().min(6).required(),
    email: joi.string().email().min(8).required(),
    password: joi.string().email().min(8).max(25).required(),    
    mobile: joi.string().length(11).required()
}