const settings = require('./sql')
const throwError = require('../application/helpers/commonErrors')


exports.exeSql = async function (sqlquery, userInput = {}) {
    const pool = settings.poolMessenger()
    pool.on('error', err => {

    })

    try {
        await pool.connect();
        let result = await pool.request();
        result = await result.query(sqlquery)
        if (result.recordsets.length > 0) {
            if (result.recordsets[0].length > 0) {
                if (result.recordsets[0][0].hasOwnProperty("errorNumber")) {
                    throwError.alreadyExists(result.recordsets[0][0].errorMessage)
                }
            }
        }


        return result.recordsets[0]
    } catch (error) {
        let e = JSON.stringify(error, ["code", "details", "httpStatus", "name"])
        throw { error: JSON.parse(e) }
    } finally {
        pool.close()
    }
}