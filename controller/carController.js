const CarDB = require('../model/carModel');
require('dotenv').config();

// Create Functions

exports.carparking = async(req, res) => {
    try {
        let carDetails = new CarDB({
            carNumber: req.body.carNumber
        })
        await CarDB.find()
            .then((data) => {
                // console.log(data.length);
                if (data.length === 10) {
                    res.status(400).send({ error: 'Sorry slot is not available', success: false })
                } else {
                    CarDB.findOne({ carNumber: req.body.carNumber })
                        .then((result) => {
                            if (result === null) {
                                carDetails.save()
                                    .then((data) => {
                                        res.status(200).send({ message: `Your car is park at slot Number ${data._id} ` })
                                    }).catch((error) => {
                                        res.status(400).send({ error: error.message, success: false })
                                    })
                            } else {
                                res.status(404).send({ message: "This car is already packed!" })
                            }
                        }).catch((err) => {
                            res.status(400).send({ err: err.message, success: false })
                        })
                }
            }).catch((err) => {
                console.log(err);
            })
    } catch (err) {
        res.status(404).send({ error: err.message, success: false })
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
        res.status(404).send({ error: err.message, success: false })
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
        res.status(404).send({ error: err.message, success: false })
    }
}
