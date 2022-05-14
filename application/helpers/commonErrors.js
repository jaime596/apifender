const { throwError } = require('./error-factory');

exports.resourceNotFound = message => {
    throwError(404, {
        name: 'RESOURCE_NOT_FOUND',
        message,
        httpStatus: 404,
    });
};

exports.noDataMatch = message => {
    throwError(400, {
        name: 'NO_DATA_MATCH',
        httpStatus: 400,
        message,
    });
};

exports.validation = error => {
    const message = error.details ? error.details[0].message : error.message;
    throwError(400, {
        name: 'INVALID_REQUEST',
        message,
        httpStatus: 400,
    });
};

exports.alreadyExists = message => {
    throwError(400, {
        name: 'RESOURSE_ALREADY_EXISTS',
        message,
        httpStatus: 400,
    });
};

exports.forbidden = () => {
    throwError(403, {
        name: 'FORBIDDEN_ACCESS',
        message: 'Sin privilegios para acceder al modulo',
        httpStatus: 403,
    });
};

exports.unauthorized = (message = undefined) => {
    throwError(401, {
        name: 'UNAUTHORIZED_ACCESS',
        message: message || 'Acceso no autorizado a la información solicitada',
        httpStatus: 401,
    });
};

exports.internalNotFound = (message = undefined) => {
    throwError(404, {
        name: 'NOT_FOUND',
        code: 5,
        message: message || 'No se encontró alguna entidad solicitada (por ejemplo, archivo o directorio',
        httpStatus: 404,
    });
};

exports.failAuthenticate = (message = undefined) => {
    throwError(403, {
        name: 'FAILED_AUTHENTICATION',
        message: message || 'El correo o contraseña no son correctos',
        httpStatus: 403,
    });
};