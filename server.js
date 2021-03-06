var express         = require('express');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var router          = require('./app/routes');
//var passport        = require('passport');

var app = express();

mongoose.connect('mongodb://localhost:27017/frontpage');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, function() {
    console.log('Running on port:3000');
});
