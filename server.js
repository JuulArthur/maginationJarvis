"use strict";
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();
mongoose.connect('mongodb://localhost:27017/test');
var models = require('./models')(mongoose);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
require('./modules/passport')(passport, models);
require('./routes')(app, express, models);
var server = app.listen(3000, (function() {
  console.log(("Running on port: " + server.address().port));
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLE9BQU0sRUFBWSxDQUFBLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0FBQ3hDLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBVyxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDO0FBQ3pDLEFBQUksRUFBQSxDQUFBLFVBQVMsRUFBUyxDQUFBLE9BQU0sQUFBQyxDQUFDLGFBQVksQ0FBQyxDQUFDO0FBQzVDLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBVyxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxDQUFDO0FBRXpDLEFBQUksRUFBQSxDQUFBLEdBQUUsRUFBSSxDQUFBLE9BQU0sQUFBQyxFQUFDLENBQUM7QUFDbkIsT0FBTyxRQUFRLEFBQUMsQ0FBQyxnQ0FBK0IsQ0FBQyxDQUFDO0FBRWxELEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFVBQVMsQ0FBQyxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFFMUMsRUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLE9BQU8sQUFBQyxDQUFDLFNBQVEsRUFBSSxVQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzlDLEVBQUUsSUFBSSxBQUFDLENBQUMsVUFBUyxLQUFLLEFBQUMsRUFBQyxDQUFDLENBQUM7QUFDMUIsRUFBRSxJQUFJLEFBQUMsQ0FBQyxVQUFTLEtBQUssQUFBQyxDQUFDLENBQUUsSUFBRyxDQUFHLDJCQUF5QixDQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELEVBQUUsSUFBSSxBQUFDLENBQUMsVUFBUyxXQUFXLEFBQUMsQ0FBQyxDQUFFLFFBQU8sQ0FBRyxLQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbEQsRUFBRSxJQUFJLEFBQUMsQ0FBQyxRQUFPLFdBQVcsQUFBQyxFQUFDLENBQUMsQ0FBQztBQUM5QixFQUFFLElBQUksQUFBQyxDQUFDLFFBQU8sUUFBUSxBQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sQUFBQyxDQUFDLG9CQUFtQixDQUFDLEFBQUMsQ0FBQyxRQUFPLENBQUUsT0FBSyxDQUFDLENBQUM7QUFFOUMsTUFBTSxBQUFDLENBQUMsVUFBUyxDQUFDLEFBQUMsQ0FBQyxHQUFFLENBQUcsUUFBTSxDQUFHLE9BQUssQ0FBQyxDQUFDO0FBR3pDLEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLEdBQUUsT0FBTyxBQUFDLENBQUMsSUFBRyxHQUFFLFNBQUEsQUFBQyxDQUFLO0FBQy9CLFFBQU0sSUFBSSxBQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQSxNQUFLLFFBQVEsQUFBQyxFQUFDLEtBQUssRUFBRyxDQUFDO0FBQzVELEVBQUMsQ0FBQztBQUNGIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzICAgICAgICAgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgbW9uZ29vc2UgICAgICAgID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBib2R5UGFyc2VyICAgICAgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xudmFyIHBhc3Nwb3J0ICAgICAgICA9IHJlcXVpcmUoJ3Bhc3Nwb3J0Jyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Rlc3QnKTtcblxudmFyIG1vZGVscyA9IHJlcXVpcmUoJy4vbW9kZWxzJykobW9uZ29vc2UpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljJykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IHR5cGU6ICdhcHBsaWNhdGlvbi92bmQuYXBpK2pzb24nIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5yZXF1aXJlKCcuL21vZHVsZXMvcGFzc3BvcnQnKShwYXNzcG9ydCxtb2RlbHMpO1xuXG5yZXF1aXJlKCcuL3JvdXRlcycpKGFwcCwgZXhwcmVzcywgbW9kZWxzKTtcblxuXG52YXIgc2VydmVyID0gYXBwLmxpc3RlbigzMDAwLCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgUnVubmluZyBvbiBwb3J0OiAke3NlcnZlci5hZGRyZXNzKCkucG9ydH1gKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9