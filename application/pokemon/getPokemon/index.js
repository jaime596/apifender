const validation = require('./validation')
const { getdetail } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.params)
    return getdetail(req)
}