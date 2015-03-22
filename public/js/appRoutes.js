'use strict';
angular.module('maginationApp').config(['$routeProvider', '$locationProvider', (function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'forumController'
    }).when('/portfolio/1', {
        templateUrl: 'projects/project-1.html',
        controller: 'mainController'
    }).when('/portfolio/2', {
            templateUrl: 'projects/project-2.html',
            controller: 'mainController'
    }).otherwise({
        templateUrl: 'views/home.html',
        controller: 'mainController'
    });
})]);
