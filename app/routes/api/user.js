var user = require('../../controllers/user');
var express = require('express');

var router = express.Router();


router.route('/')
    .post(user.create)
    .get(user.list);

router.get('/user/:user', user.getUser);

module.exports = router;