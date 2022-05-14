const settings = require('./sql')

exports.exeSql = async function (sqlquery, userInput = {}) {
    const pool = settings.poolMessenger()
    pool.on('error', err => {

    })

    try {
        await pool.connect();
        let result = await pool.request();
        result = await result.query(sqlquery)
        return result.recordsets[0]
    } catch (error) {
        let e = JSON.stringify(err, ["Message", "arguments", "type", "name"])
        throw { error: JSON.parse(e).message }
    } finally{
        pool.close()
    }
}