"use strict";
angular.module('electionsCtrl', []).controller('electionsController', ['$scope', '$http', '$routeParams', (function ($scope, $http, $routeParams) {

    var getElection = (function () {
        $http({
            method: 'GET',
            url: '/api/election/' + $routeParams.param
        }).success((function (data, status, headers, config) {
            $scope.election = data;
        })).error((function (data, status, headers, config) {
            $scope.election = data;
        }));
    });

    getElection();
})]);