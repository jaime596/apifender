//const { tokenValidation } = require('');
const validation = require('./validation')
const { addUser } = require('./auxiliaries')()

module.exports = (req) => {
    //tokenValidation
    validation(req.body)
    return  addUser(req)
}