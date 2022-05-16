const response = require('../config/response');
const express = require('express');
const users = require('../application/users');
const { validateToken } = require('../application/helpers/security');
const router = express.Router();

//const { createNewUser, getUser } = require('../controllers/user.controller')

router.get('/all', validateToken, (req, res) => {
    users.getAll(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error)
        })
})

router.post('/add', (req, res) => {
    users.addUser(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.error.details || "", error.error.code || 500)
        })
})

router.put('/mod', validateToken, (req, res) => {
    users.modUser(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error)
        })
})

router.delete('/delete', validateToken, (req, res) => {
    users.deleteUser(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error)
        })
})

router.post('/login', (req, res) => {
    users.loginUser(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error.details || "", error.code || 500)
        })
})

module.exports = router

