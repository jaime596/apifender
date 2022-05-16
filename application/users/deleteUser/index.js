const validation = require('./validation')
const { deleteUser } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.body)
    return deleteUser(req)
}