const { param } = require('express/lib/request')
const joi = require('joi')
const throwError = require('../../helpers/commonErrors')

module.exports = param => {
    const schema = joi.object({
        user: joi.string().min(3).max(50).required(),
        password: joi.string().min(3).max(500).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        name: joi.string().min(3).max(50).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        description: joi.string()
    })

    const { error, value: sanitizedValues } = schema.validate(param);

    return error
        ? throwError.validation(error)
        : sanitizedValues
}