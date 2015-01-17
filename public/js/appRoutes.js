"use strict";
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', (function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).when('/elections', {
        templateUrl: 'views/elections.html',
        controller: 'electionController'
    }).when('/elections/:param', {
        templateUrl: 'views/election.html',
        controller: 'electionsController'
    }).otherwise({
        templateUrl: 'views/home.html',
        controller: 'mainController'
    });
})]);