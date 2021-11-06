const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.URL

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('connected....DB');
})


module.exports = con;