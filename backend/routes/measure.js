var express = require('express');
var router = express.Router();
// we import our measure controller
var measure = require('../Controllers/measure.controller');


/* GET one measure */
router.get('/:measureId', measure.findOne);

/* DELETE  one measure */
router.delete('/:measureId', measure.delete);

/* UPDATE one measure */
router.post('/:measureId', measure.update);

/* CREATE one measure */
router.put('/', measure.create);

module.exports = router;