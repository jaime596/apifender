const characterData = require('../../../data/character')

const defaults = {
    character: characterData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { character } = dependencies;

    const getinfoCharacter = (req) => {
        return character.getinfoCharacter(req);
    }

    const auxiliaries = { getinfoCharacter }
    return auxiliaries
}

module.exports = auxiliariesFactory