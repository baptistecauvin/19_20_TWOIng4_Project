var express = require('express');
var router = express.Router();

var user = require('../Controllers/sensor.controller');

/* GET sensors listing. */
router.get('/', sensor.findAll);

module.exports = router;