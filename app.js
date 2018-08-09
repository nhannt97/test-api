var app = angular.module('testApi', []);
app.controller('testApi', function ($scope, $http) {
    $scope.sendRequest = function () {
        $http({
            url: $scope.url,
            method: $scope.method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': $scope.token
            },
            data: JSON.parse($scope.payload)
        }).then(function(response) {
            window.response = response;
            console.log(response);
        }).catch(function(err) {
            window.error = err;
            console.log(err);
        });
    }
});