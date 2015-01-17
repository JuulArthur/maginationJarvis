"use strict";
var passport = require('passport');
module.exports = (function(app, express) {
  var router = express.Router();
  router.post('/login', (function(req, res) {
    passport.authenticate('local', (function(err, user, info) {
      if (err)
        return res.send(err);
      if (!user)
        return res.send({message: 'Incorrect password or username'});
      req.logIn(user, (function(err) {
        if (err)
          res.send(err);
      }));
      return res.send(user);
    }))(req, res);
  }));
  app.use('/auth', router);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hdXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsQUFBSSxFQUFBLENBQUEsUUFBTyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsVUFBUyxDQUFDLENBQUM7QUFFbEMsS0FBSyxRQUFRLElBQUksU0FBQyxHQUFFLENBQUcsQ0FBQSxPQUFNO0FBQ3pCLEFBQUksSUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sT0FBTyxBQUFDLEVBQUMsQ0FBQztBQUU3QixPQUFLLEtBQUssQUFBQyxDQUFDLFFBQU8sR0FBRyxTQUFDLEdBQUUsQ0FBRyxDQUFBLEdBQUU7QUFDMUIsV0FBTyxhQUFhLEFBQUMsQ0FBQyxPQUFNLEdBQUcsU0FBQyxHQUFFLENBQUcsQ0FBQSxJQUFHLENBQUcsQ0FBQSxJQUFHO0FBQzFDLFNBQUksR0FBRTtBQUFHLGFBQU8sQ0FBQSxHQUFFLEtBQUssQUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUEsQUFDN0IsU0FBSSxDQUFDLElBQUc7QUFBRyxhQUFPLENBQUEsR0FBRSxLQUFLLEFBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBRyxpQ0FBK0IsQ0FBQyxDQUFDLENBQUM7QUFBQSxBQUN2RSxRQUFFLE1BQU0sQUFBQyxDQUFDLElBQUcsR0FBRyxTQUFBLEdBQUUsQ0FBSztBQUFFLFdBQUksR0FBRTtBQUFHLFlBQUUsS0FBSyxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUE7QUFBQSxNQUFFLEVBQUMsQ0FBQztBQUNsRCxXQUFPLENBQUEsR0FBRSxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztJQUN6QixFQUFDLEFBQUMsQ0FBQyxHQUFFLENBQUcsSUFBRSxDQUFDLENBQUM7RUFDaEIsRUFBQyxDQUFDO0FBRUYsSUFBRSxJQUFJLEFBQUMsQ0FBQyxPQUFNLENBQUcsT0FBSyxDQUFDLENBQUM7QUFHNUIsQ0FBQSxDQUFDO0FBQ0QiLCJmaWxlIjoicm91dGVzL2F1dGguanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhcHAsIGV4cHJlc3MpID0+IHtcbiAgICB2YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuICAgIHJvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcsIChlcnIsIHVzZXIsIGluZm8pID0+e1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zZW5kKGVycik7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc2VuZCh7bWVzc2FnZTogJ0luY29ycmVjdCBwYXNzd29yZCBvciB1c2VybmFtZSd9KTtcbiAgICAgICAgICAgIHJlcS5sb2dJbih1c2VyLCBlcnIgPT4geyBpZiAoZXJyKSByZXMuc2VuZChlcnIpIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHVzZXIpO1xuICAgICAgICB9KShyZXEsIHJlcyk7XG4gICAgfSk7XG5cbiAgICBhcHAudXNlKCcvYXV0aCcsIHJvdXRlcik7XG5cblxufTtcbiJdfQ==