const validation = require('./validation')
const { getAll } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.params)
    return getAll(req)
}