"use strict";
module.exports = (function (app, express, models) {

    var router = express.Router();

    app.use('/api', router);

    router.get('/', (function (res, req) {
        req.send('api');
    }));

    require('./user')(router,models);
});
