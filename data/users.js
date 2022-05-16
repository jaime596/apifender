const db = require('../config/help')
const bcryptjs = require('bcryptjs')


exports.getAll = async (req) => {
    let sql = 'EXEC getAllUsers'
    const result = db.exeSql(sql)
    return result
}


exports.addUser = async (req) => {
    let passHash = await bcryptjs.hash(req.password, 8)
    let sql = `EXEC newUser '${req.user}', '${passHash}', '${req.name}', '${req.email}', '${req.description}'`
    const result = db.exeSql(sql)
    return result
}


exports.modUser = async (req) => {
    let passHash = await bcryptjs.hash(req.password, 8)
    let sql = `EXEC modUser '${req.user}', ${req.password === "" ? "''" : "'" + passHash + "'"}, '${req.name}', '${req.email}', '${req.description}'`
    console.log(sql)
    const result = db.exeSql(sql)
    return result
}

exports.deleteUser = async (req) => {
    let sql = `EXEC deleteUser  '${req.user}'`
    console.log(sql)
    const result = db.exeSql(sql)
    return result
}

exports.loginUser = async (req) => {
    let sql = `EXEC loginUser  ${req.user}`
    const result = db.exeSql(sql)
    return result
}