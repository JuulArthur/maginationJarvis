"use strict";
var bcrypt = require('bcryptjs');
var SALT_ROUNDS = 8;
module.exports = (function (collection, mongoose) {
    var schema = mongoose.Schema({
        username: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        'email': {
            type: String,
            required: true,
            index: { unique: true },
            validate: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\b/ }
    });
    /*schema.pre('save', function (next) {
        var user = this;
        bcrypt.genSalt(SALT_ROUNDS, (function (err, salt) {
            bcrypt.hash(user.password, salt, (function (err, hash) {
                user.password = hash;
                next();
            }));
        }));
    });
    schema.methods.validPassword = function (password, cb) {
        bcrypt.compare(password, this.password, (function (err, res) {
            return cb(err, res);
        }));
    }; */
    return mongoose.model(collection, schema);
});