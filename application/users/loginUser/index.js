const { schema, validateUser } = require('./validation')
const { loginUser } = require('./auxiliaries')()

module.exports = async (req) => {
    schema(req.body)
    const request = await loginUser(req)
    return validateUser(request, req.body.password)
}