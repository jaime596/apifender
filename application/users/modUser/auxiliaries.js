const usersData = require('../../../data/users')

const defaults = {
    users: usersData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { users } = dependencies;

    const modUser = (req) => {
        return users.modUser(req.body);
    }

    const auxiliaries = { modUser }
    return auxiliaries
}

module.exports = auxiliariesFactory