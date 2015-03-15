"use strict";
var express = require('express');
var userRoutes = require('./user');

var router = express.Router();

router.use('/user', userRoutes);
router.get('/', function(req, res, next) {
    res.send('api');
});

module.exports = router;