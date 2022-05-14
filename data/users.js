const db = require('../config/help')

exports.getAll = async (req, res) => {
    let sql = 'EXEC getAllUsers'
    const result = db.exeSql(sql)
    console.log(result)
    return result
}
