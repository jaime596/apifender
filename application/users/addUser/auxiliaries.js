const usersData = require('../../../data/users')

const defaults = {
    users: usersData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { users } = dependencies;

    const addUser = (req) => {
        return users.addUser(req.body);
    }

    const auxiliaries = { addUser }
    return auxiliaries
}

module.exports = auxiliariesFactory