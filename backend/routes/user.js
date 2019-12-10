var express = require('express');
var router = express.Router();
// we import our user controller
var user = require('../Controllers/user.controller');


/* GET one user */
router.get('/:userId', user.findOne);

/* DELETE one user */
router.delete('/:userId', user.delete);

/* UPDATE one user */
router.post('/:userId', user.update);

/* CREATE one user */
router.put('/', user.create);

module.exports = router;