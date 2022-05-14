//const { tokenValidation } = require('');
const validation = require('./validation')
const { getAll } = require('./auxiliaries')()

module.exports = (req) => {
    //tokenValidation
    validation(req.params)
    return getAll(req)
}