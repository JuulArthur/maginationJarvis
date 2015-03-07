"use strict";
angular.module('maginationApp').config(['$routeProvider', '$locationProvider', (function ($routeProvider, $locationProvider) {

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

    $locationProvider.html5Mode(true);
})]);