const customError = require('./custom-error')

module.exports = (errorType = { name: '', code: 0, message: '' }, httpStatus, metadata) => {
    throw new customError(errorType.name, errorType.code, errorType.message, httpStatus, metadata)
}