const validation = require('./validation')
const { addFavCharacter } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.params)
    return addFavCharacter(req)
}