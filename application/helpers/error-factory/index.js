const errorFactory = require('./factory');

function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function extractOptions(options) {
  const name = (hasProperty(options, 'name') && typeof options.name === 'string') ? options.name : null;
  const message = (hasProperty(options, 'message') && typeof options.message === 'string') ? options.message : null;
  const httpStatus = hasProperty(options, 'httpStatus') ? options.httpStatus : null;
  const details = (hasProperty(options, 'details') && !isEmptyObject(options.details || {})) ? options.details : null;
  return { name, message, details, httpStatus };
}

exports.throwError = (errorCode = 0, options = { name: '', message: '', details: {}, httpStatus: 0 }) => {
  const { name, message, details, httpStatus } = extractOptions(options);
  errorFactory({ name, code: errorCode, message }, httpStatus, details);
};