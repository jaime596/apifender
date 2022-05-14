const usersData = require('../../../data/users')

const defaults = {
    users: usersData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { users } = dependencies;

    const getAll = (req) => {
        return users.getAll(req.params);
    }

    const auxiliaries = { getAll }
    return auxiliaries
}

module.exports = auxiliariesFactory