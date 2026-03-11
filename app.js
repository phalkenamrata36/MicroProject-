// Define the AngularJS app
var app = angular.module("helloApp", []);

// Define the controller
app.controller("HelloController", ['$scope', function ($scope) {
    $scope.message = "Hello AngularJS 🚀";
}]);