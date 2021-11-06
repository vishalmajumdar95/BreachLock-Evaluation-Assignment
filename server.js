const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express()

// Database Require
require('./db/carDB');

// Route
const carRoutes = require('./route/carRoute')

//middlewears
app.use(morgan('dev'))
app.use(express.json())
app.use('/car', carRoutes)
app.use('*', (req, res) => {
    res.send({ message: 'wrong route! please check your route', suceess: false })
})


const port = process.env.PORT || 4000

var server = app.listen(port, () => {
    let host = server.address().address
    let port = server.address().port
    console.log(host, port);
    console.log('Server is running Successfully..')
})