const usersData = require('../../../data/users')

const defaults = {
    users: usersData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { users } = dependencies;

    const deleteUser = (req) => {
        return users.deleteUser(req.body);
    }

    const auxiliaries = { deleteUser }
    return auxiliaries
}

module.exports = auxiliariesFactory