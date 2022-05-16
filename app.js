const express = require('express')
const bodyParser = require('body-parser')
const {config} = require('dotenv')
const cors = require('cors');

config()

const app = express()
app.use( cors() );
app.use(bodyParser.urlencoded({ limit: '50mb', extends: true }))
app.use(bodyParser.json({ limit: '50mb', extended: true }))


const handleError = (error, req, res, next) => {
    if (error.data) {
        error.message = error.data.code || error.message
        delete error.data.code
        res.status(400).send(error)
    }
    const errorResult = {
        success: 0,
        message: error.message || error,
        data: []
    }
    const statusCode = error.code || 400;
    res.status(statusCode).send(errorResult)
}

const defaultRoute = (req, res) => {
    res.status(404).send({ success: 0, message: 'Ruta invalida', data: {} })
}

const routes = require('./api-routes')
const req = require('express/lib/request')
app.use('/user', routes.users)
app.use('/character', routes.character)



app.use(handleError)
app.use(defaultRoute)

//app.set('port', config.port)

app.use(express.urlencoded({ extended: false }))


app.listen(process.env.SERVER_PORT, () => console.log(`Server running at port: ${process.env.SERVER_PORT}`))