const usersData = require('../../../data/users')

const defaults = {
    users: usersData
}

const auxiliariesFactory = (dependencies = defaults) => {
    const { users } = dependencies;

    const loginUser = (req) => {
        return users.loginUser(req.body);
    }

    const auxiliaries = { loginUser }
    return auxiliaries
}

module.exports = auxiliariesFactory