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
        }).when('/portfolio/3', {
            templateUrl: 'projects/project-3.html',
            controller: 'mainController'
        }).when('/portfolio/4', {
            templateUrl: 'projects/project-4.html',
            controller: 'mainController'
        }).when('/portfolio/5', {
            templateUrl: 'projects/project-5.html',
            controller: 'mainController'
        }).when('/portfolio/6', {
            templateUrl: 'projects/project-6.html',
            controller: 'mainController'
        }).when('/portfolio/7', {
            templateUrl: 'projects/project-7.html',
            controller: 'mainController'
        }).when('/portfolio/8', {
            templateUrl: 'projects/project-8.html',
            controller: 'mainController'
        }).when('/portfolio/9', {
            templateUrl: 'projects/project-9.html',
            controller: 'mainController'
        }).when('/portfolio/10', {
            templateUrl: 'projects/project-10.html',
            controller: 'mainController'
        }).otherwise({
            templateUrl: 'views/home.html',
            controller: 'mainController'
        });
})]);
