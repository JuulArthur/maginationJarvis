'use strict';
var express = require('express');
var apiRoutes = require('./api');
var path = require('path');

var router = express.Router();

router.use('/api', apiRoutes);
router.get('/forum', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'forumBase.html'));
});
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

module.exports = router;
