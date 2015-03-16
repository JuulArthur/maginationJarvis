"use strict";
var express = require('express');
var userRoutes = require('./user');

var router = express.Router();

router.use('/user', userRoutes);
router.get('/', function(req, res, next) {
    res.send('api');
});

router.use(function(err, req, res, next) {
    return res.json({'message': 'user already exists!'});
});

module.exports = router;