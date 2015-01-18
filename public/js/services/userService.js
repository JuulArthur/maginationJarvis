"use strict";
angular.module('voteApp').service('userService', function ($http) {

    this.isAuthenticated = function () {
        return $http({
            method: 'GET',
            url: '/api/isAuthenticated'
        }).success(function (data, status, headers, config) {
            return (!('user' in data));
        }).error(function (data, status, headers, config) {
        });
    };

    this.login = function (username, password) {
        var promise = $http({
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            url: '/auth/login'
        }).success(function (data, status, headers, config) {
            return data;
        }).error(function (data, status, headers, config) {
            return data;
        });
        return promise;
    };

    this.createUser = function (username, password, email) {
        var promise = $http({
            method: 'POST',
            data: {
                username: username,
                password: password,
                email: email
            },
            url: '/api/user'
        }).success(function (data, status, headers, config) {
            return data;
        }).error(function (data, status, headers, config) {
            return data;
        });
        return promise;
    }
});