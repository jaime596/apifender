const jwt = require('jsonwebtoken')
const { unauthorized } = require('./commonErrors')


exports.validateToken = (req, res, next) => {
    const authorization = req.header('Authorization')
    if (!authorization) {
        return unauthorized()
    }

    try {
        const { id } = jwt.verify(authorization, process.env.JWT_KEY)
        req.id = id
    } catch (error) {
        unauthorized()
    }
    next()

}
