angular.module("tinyurlApp")
    .controller("homeController", ["$scope", "$http", "$location", "$interval", function ($scope, $http, $location, $interval) {
        $scope.submit = function () {
            $http.post("/api/v1/urls", {
                longUrl: $scope.longUrl
            }).success(function (data) {
                $location.path("/urls/" + data.shortUrl);
            });
        }
        $scope.currTime = new Date().toLocaleTimeString();
        $interval(function () {
          $scope.currTime = new Date().toLocaleTimeString();
        }, 1000);
    }]);
