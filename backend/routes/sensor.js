var express = require('express');
var router = express.Router();
// we import our user controller
var user = require('../Controllers/sensor.controller');


/* GET one sensor */
router.get('/:sensorId', sensor.findOne);

/* DELETE one sensor */
router.delete('/:sensorId', sensor.delete);

/* UPDATE one sensor */
router.post('/:sensorId', sensor.update);

/* CREATE one sensor */
router.put('/', sensor.create);

module.exports = router;