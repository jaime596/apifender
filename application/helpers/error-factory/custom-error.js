module.exports = function customError(name, code, details, httpStatus, metadata) {
    Error.captureStackTrace(this, this.constructor);

    this.name = name
    this.code = code;
    this.details = details;

    if (httpStatus) {
        this.httpStatus = httpStatus
    }
    if (metadata) {
        this.metadata = metadata
    }
}

require('util').inherits(module.exports, Error)