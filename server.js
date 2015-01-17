var express         = require('express');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var passport        = require('passport');
module.exports = function (test) {
    var app = express();
    if (test) {
        mongoose.connect('mongodb://localhost:27017/fakedb');
    } else {
        mongoose.connect('mongodb://localhost:27017/test');
    }

    var models = require('./models')(mongoose);

    app.use(express.static(__dirname + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(passport.initialize());
    app.use(passport.session());
    require('./modules/passport')(passport,models);

    require('./routes')(app, express, models);

    /*var testUser = new models.User({
        username: 'user',
        password: 'pass'
    });

    testUser.save(function (err, testUser) {
        if (err) return console.error(err);
        console.dir(testUser);
    });*/


    app.listen(3000,function () {
        console.log('Running on port:3000');
});

if (test) {
    require('./test/routes')(models, app);
    require('./test/models')(models);
}

};

