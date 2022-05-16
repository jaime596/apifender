const db = require('../config/help')

const axios = require("axios");
const throwError = require('../application/helpers/commonErrors')


exports.getAll = async (req) => {
    try {
        const request = await axios.get(`https://rickandmortyapi.com/api/character/?page=${req.query.page}`);
        return request.data
    } catch (error) {
        return throwError.resourceNotFound(error.response.data)
    }
}

exports.allFavCharacter = async (req) => {
    let sql = `EXEC getFavCharacters  '${req.user}'`
    const result = db.exeSql(sql)
    return result
}

exports.getinfoCharacter = async (req) => {
    try {
        const request = await axios.get(`https://rickandmortyapi.com/api/character/${req.headers.id}`);
        return request.data
    } catch (error) {
        return throwError.resourceNotFound(error.response.data)
    }
}

exports.addFavCharacter = async (req) => {
    let sql = `EXEC addToFavorites  '${req.user}', ${req.idCharacter}`
    const result = db.exeSql(sql)
    return result
}
