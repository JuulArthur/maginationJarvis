"use strict";
angular.module('maginationApp').controller('mainController', function ($scope, userService) {
    $scope.success = false;
    $scope.error = false;

    $scope.submit = function (user) {
        userService.createUser(user.username, user.password, user.email).then(function (response) {
            $scope.success = response.data.message === "User created";
            $scope.error = !$scope.success;
        });
    }
});