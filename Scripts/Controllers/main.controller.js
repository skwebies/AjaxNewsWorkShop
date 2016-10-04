/// <reference path="../angular.js" />

angular.module("newsBlogModule")
    .controller("MainController",
    [
        "$scope",
        "$location",
        "$route",
        "repository",
        function($scope,  $location, $route, repository) {
            $scope.$route = $route;
            $scope.api = "http://dummyapi.kodalagom.se/api";
            $scope.postDeleteUrl = "http://dummyapi.kodalagom.se/api/posts/";

            $scope.posts = {};

            repository.getPosts($scope.api)
                .then(function(data) {
                    $scope.posts = data;
                });


            $scope.go = function(url) {
                $location.path(url);
            };
        }
    ]);