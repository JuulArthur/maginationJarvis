'use strict';
angular.module('maginationApp').config(['$routeProvider', '$locationProvider', (function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'forumController'
    }).otherwise({
        templateUrl: 'views/home.html',
        controller: 'mainController'
    });

    $locationProvider.html5Mode(true);
})]);
