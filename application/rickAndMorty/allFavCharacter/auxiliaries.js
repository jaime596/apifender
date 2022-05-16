const characterData = require('../../../data/character')

const defaults = {
    character: characterData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { character } = dependencies;

    const allFavCharacter = (req) => {
        return character.allFavCharacter(req.headers);
    }

    const auxiliaries = { allFavCharacter }
    return auxiliaries
}

module.exports = auxiliariesFactory