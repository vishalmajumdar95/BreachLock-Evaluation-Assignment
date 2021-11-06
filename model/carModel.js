const mongoose = require('mongoose')

carSchema = new mongoose.Schema({

    carNumber: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('carData', carSchema)