const characterData = require('../../../data/character')

const defaults = {
    character: characterData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { character } = dependencies;

    const addFavCharacter = (req) => {
        return character.addFavCharacter(req.body);
    }

    const auxiliaries = { addFavCharacter }
    return auxiliaries
}

module.exports = auxiliariesFactory