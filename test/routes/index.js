"use strict";
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var request = require('supertest');
var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
module.exports = (function (models, app) {
    describe("Auth", (function () {
        var url = "http://localhost:3000";
        var testUser = {
            username: "test",
            password: "test121312313"
        };
        before((function (done) {
            new models.User(testUser).save((function (err, usr) {
                should.not.exist(err);
                done();
            }));
        }));
        after((function (done) {
            models.User.remove({}, done);
        }));
        it('should be usable', (function (done) {
            request(app).get('/api/election').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
        }));
    }));
});
