const validation = require('./validation')
const { allFavCharacter } = require('./auxiliaries')()

module.exports = (req) => {
    validation(req.params)
    return allFavCharacter(req)
}