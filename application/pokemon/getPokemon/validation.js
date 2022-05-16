const { param } = require('express/lib/request')
const joi = require('joi')
const throwError = require('../../helpers/commonErrors')

module.exports = param => {
    const schema = joi.object().keys({
    })

    const { error, value: sanitizedValues } = schema.validate(param);

    return error
        ? throwError.validation(error)
        : sanitizedValues
}