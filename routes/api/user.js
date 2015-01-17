module.exports = function (router, models) {

    router.route('/user')
        .post(function (req, res) {
            new models.User({
                'username': req.body.user,
                'password': req.body.pass,
                'email': req.body.email
            }).save(function (err) {
                    if (err) return res.send(err);
                    return res.json({ message: "User created" });
                });
        })

        .get(function (req, res) {
            models.User.find(function (err, users) {
                if (err) return res.send(err);
                return res.json(users);
            });
        });

    router.route('/user/:user')
        .get(function (req, res) {
            models.User.find( {username: req.params.user}, function (err, user) {
                if (err) return res.send(err);
                return res.json(user);
            });
        });

};