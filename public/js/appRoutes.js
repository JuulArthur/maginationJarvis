"use strict";
angular.module('maginationApp').config(['$routeProvider', '$locationProvider', (function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).otherwise({
        templateUrl: 'views/home.html',
        controller: 'mainController'
    });
})]);