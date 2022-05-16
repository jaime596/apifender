const characterData = require('../../../data/character')

const defaults = {
    character: characterData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { character } = dependencies;

    const getAll = (req) => {
        return character.getAll(req);
    }

    const auxiliaries = { getAll }
    return auxiliaries
}

module.exports = auxiliariesFactory