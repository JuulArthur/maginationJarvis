"use strict";
angular.module('maginationApp').controller('mainController', function ($scope, userService) {
        $scope.success = false;
        $scope.error = false;
        $scope.message = "default";

        $scope.submit = function (user) {
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
                    $scope.error = !$scope.success;
                    if ($scope.error) {
                        $scope.message = "Username or email already in use";
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