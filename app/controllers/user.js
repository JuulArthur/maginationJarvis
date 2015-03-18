var Bluebird = require('bluebird');
var User = require('../models/user');

exports.create = function(req, res, next) {
    return User.createAsync({
        'username': req.body.username,
        'email': req.body.email
    })
    .then(function(user) {
        return res.json({'message': 'username reserved!'});
    })
    .catch(next);
};

exports.list = function(req, res, next) {
    return User.findAsync({})
        .then(function(users) {
            return res.json(users);
        })
        .catch(next);
};

exports.getUser = function(req, res, next) {
    return User.findAsync({username: req.params.user})
        .then(function(user) {
            return res.status(302).json(user);
        })
        .catch(next);
};