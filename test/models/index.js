var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
module.exports = (function (models) {
    describe("User", (function () {
        var testUser = {
            username: "test",
            password: "prompetiss"
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
        it('should be able to be found in the db', (function (done) {
            models.User.findOne({username: testUser.username}, (function (err, usr) {
                should.not.exist(err);
                should.exist(usr);
                usr.username.should.equal(testUser.username, 'retrieved username should match the saved username');
                usr.password.should.not.equal(testUser.password, 'password should be hashed before save');
                done();
            }));
        }));
        it('should be able to validate password', (function (done) {
            models.User.findOne({username: testUser.username}, (function (err, usr) {
                usr.validPassword(testUser.password, (function (err, res) {
                    should.not.exist(err, 'password validation should not have errors');
                    assert(res, 'password should be valid');
                    done();
                }));
            }));
        }));
    }));
});