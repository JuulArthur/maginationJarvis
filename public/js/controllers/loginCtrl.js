'use strict';
angular.module('maginationApp').controller('loginController', ['$scope', '$http', function($scope, $http) {

    $scope.login = (function() {
        $http({
            method: 'POST',
            data: {
                username: $scope.username,
                password: $scope.password
            },
            url: '/auth/login'
        }).success((function(data, status, headers, config) {
            $scope.tagline = data;
        })).error((function(data, status, headers, config) {
            $scope.tagline = 'nope';
        }));
    });
}]);
