const CarDB = require('../model/carModel');
require('dotenv').config();

// Create Functions
exports.carparking = async(req, res) => {
    try {
        let { carNumber } = req.body
        let carDetails = new CarDB({
            carNumber
        })
        await CarDB.find()
            .then((data) => {
                console.log(data.length);
                if (data.length === 10) {
                    res.status(400).send({ error: 'Sorry slot is not available', success: false })
                } else {
                    carDetails.save()
                        .then((data) => {
                            res.status(200).send({ message: `Your car is park at slot Number ${data._id} ` })
                        }).catch((error) => {
                            res.status(400).send({ error: error.message, success: false })
                        })
                }
            }).catch((err) => {
                console.log(err);
            })
    } catch (err) {
        res.status(400).send({ error: err.message, success: false })
    }
}

exports.unParkedCar = async(req, res) => {
    try {
        let slotNumber = req.params.number
        await CarDB.findByIdAndDelete(slotNumber)
            .then((data) => {
                res.status(200).send(data)
            }).catch((error) => {
                res.status(400).send(error)
            })
    } catch (err) {
        res.send({ error: err.message, success: false })
    }
}


exports.getCarById = async(req, res) => {
    try {
        let carNumber = req.params.number
        await CarDB.findById(carNumber)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message, success: false })
    }
}