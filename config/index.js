"use strict";
function _throw(m) {
    throw m;
}
var convict = require('convict');
var validator = require('validator');

process.on('uncaughtException', (function (err) {
    debug(("Caught exception without specific handler: " + util.inspect(err)));
    debug(err.stack, 'error');
    process.exit(1);
}));
