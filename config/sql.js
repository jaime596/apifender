const sql = require('mssql')
const { databaseConfig } = require('./index')

const poolMessenger = () => new sql.ConnectionPool(databaseConfig)

module.exports = {
    poolMessenger,
}