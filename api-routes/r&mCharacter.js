const response = require('../config/response');
const express = require('express');
const character = require('../application/rickAndMorty');
const { validateToken } = require('../application/helpers/security');
const router = express.Router();


router.get('/all', validateToken, (req, res) => {
    character.getAll(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.name, error.code)
        })
})

router.get('/allFavCharacter', validateToken, (req, res) => {
    character.allFavCharacter(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.name, error.code)
        })
})

router.get('/infoCharacter', validateToken, (req, res) => {
    character.getinfoCharacter(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.name, error.code)
        })
})

router.post('/addFavCharacter', validateToken, (req, res) => {
    character.addFavCharacter(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.name, error.code)
        })
})

module.exports = router

