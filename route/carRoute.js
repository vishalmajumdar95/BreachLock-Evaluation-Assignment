var express = require('express');
var router = express.Router();
const controller = require('../controller/carController')

// Post the Car
router.post('/carPark', controller.carparking);
//Get car slot data
router.get('/carSlotData/:number', controller.getCarById);
// Find the Unpacked car
router.delete('/unParkedcar/:number', controller.unParkedCar);

module.exports = router;