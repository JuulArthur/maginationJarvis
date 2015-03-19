"use strict";
angular.module('maginationApp').controller('mainController', function ($scope, userService, $timeout) {
        $scope.success = false;
        $scope.error = false;
        $scope.creatingUser = true;
        $scope.message = "default";

        var removeAlerts = function() {
            $scope.success = false;
            $scope.error = false;
            console.log("timeout");
        };

        $scope.submit = function (user) {
            $timeout(removeAlerts, 7000);
            if (user === undefined) {
                $scope.error = true;
                $scope.message = "Username must be at least 5 characters";
                return;
            } else if (user.username === undefined || user.username.length < 5) {
                $scope.error = true;
                $scope.message = "Username must be at least 5 characters";
                return;
            } else if (user.email === undefined || !validateEmail(user.email)) {
                $scope.error = true;
                $scope.message = "invalid email address";
                return;
            }
            userService.createUser(user.username, user.email)
                .success(function (response) {
                    $scope.success = response.message === "username reserved!";
                    $scope.error = !$scope.success;
                    if ($scope.error) {
                        $scope.message = "Username or email already in use";
                    } else {
                        $scope.creatingUser = false;
                        console.log($scope.creatingUser);
                    }
                })
                .error(function (response) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.message = "Something went wrong with your request"
                });
        };

        $scope.setSuccessFalse = function () {
            $scope.success = false;
        };

        $scope.setErrorFalse = function () {
            $scope.error = false;
        };

        var validateEmail = function (email) {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            return (atpos >= 1 && dotpos >= atpos + 1 && dotpos <= email.length);
        }
    }
)
;