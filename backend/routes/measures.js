var express = require('express');
var router = express.Router();

var measure = require('../Controllers/measure.controller');

/* GET measures listing. */
router.get('/', measure.findAll);

module.exports = router;