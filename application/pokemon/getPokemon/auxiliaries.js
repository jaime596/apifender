const characterData = require('../../../data/pokemon')

const defaults = {
    character: characterData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { character } = dependencies;

    const getdetail = (req) => {
        return character.getdetail(req);
    }

    const auxiliaries = { getdetail }
    return auxiliaries
}

module.exports = auxiliariesFactory