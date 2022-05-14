const response = require('../config/response');
const express = require('express');
const users = require('../application/users');
const router = express.Router();

//const { createNewUser, getUser } = require('../controllers/user.controller')

router.get('/all', (req, res) => {
    users.getAll(req)
        .then(result => {
            response.success(res, result, 200)
        })
        .catch(error => {
            response.error(res, error)
        })
})

//router.post('/user', createNewUser)

//router.get('/user', getUser)

//router.delete('/user', getUser)

//router.put('/user', getUser)

module.exports = router

