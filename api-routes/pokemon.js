const response = require('../config/response');
const express = require('express');
const character = require('../application/pokemon');
const { validateToken } = require('../application/helpers/security');
const router = express.Router();


router.get('/detail', validateToken, (req, res) => {
    character.getdetail(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.name, error.code)
        })
})

module.exports = router
