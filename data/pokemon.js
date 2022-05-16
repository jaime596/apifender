const axios = require("axios");
const throwError = require('../application/helpers/commonErrors')


exports.getdetail = async (req) => {
    try {
        console.log("hola")
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.headers.id}/`);
        return request.data
    } catch (error) {
        return throwError.resourceNotFound(error.response.data)
    }
}