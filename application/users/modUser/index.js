const validation = require('./validation')
const { modUser } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.body)
    return modUser(req)
}