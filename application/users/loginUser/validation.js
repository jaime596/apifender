const { param } = require('express/lib/request')
const joi = require('joi')
const throwError = require('../../helpers/commonErrors')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const schema = param => {
    const schema = joi.object({
        user: joi.string().min(3).max(50).required(),
        password: joi.string().min(3).max(500).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })

    const { error, value: sanitizedValues } = schema.validate(param);

    return error
        ? throwError.validation(error)
        : sanitizedValues
}

const validateUser = async (param, pass) => {
    if (param.length === 0 || !(await bcryptjs.compare(pass, param[0].password))) {
        throwError.unauthorized("User not found")
    } else {
        let values = param[0]
        const token = jwt.sign({ id: param[0].id }, process.env.JWT_KEY)
        values.authorization = token
        return values
    }
}

module.exports = {
    schema,
    validateUser
}