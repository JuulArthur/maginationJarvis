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
            } else if (user.password === undefined || user.password.length < 6) {
                $scope.error = true;
                $scope.message = "Password must be at least 6 characters";
                return;
            }
            userService.createUser(user.username, user.password, user.email).then(function (response) {
                    $scope.success = response.data.message === "User created";
                    $scope.error = !$scope.success;
                    if ($scope.error) {
                        $scope.message = "Username or email already in use";
                    }
                }
            )
            ;
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
            return (atpos >= 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length);
        }
    }
)
;