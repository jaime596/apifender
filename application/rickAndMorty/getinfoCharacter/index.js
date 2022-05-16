const validation = require('./validation')
const { getinfoCharacter } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.params)
    return getinfoCharacter(req)
}