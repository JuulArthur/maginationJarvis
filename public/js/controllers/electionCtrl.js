"use strict";
angular.module('electionCtrl', []).controller('electionController', (function ($scope, $http) {

    var getElections = (function () {
        $http({
            method: 'GET',
            url: '/api/election'
        }).success((function (data, status, headers, config) {
            $scope.tagline = 'Success';
            $scope.elections = data;
        })).error((function (data, status, headers, config) {
            $scope.tagline = data;
        }));
    });

    getElections();
}));
