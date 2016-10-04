/// <reference path="../angular.js" />

angular.module("newsBlogModule")
    .controller("HomeController",
    [
        "$scope",
        "repository",
        function($scope, repository) {
            $scope.title = "Home";


            //filter object
            $scope.filters = { author: '', title: '' };

            $scope.search = function() {
                repository.all($scope.filters)
                    .then(function(data) {
                        $scope.posts = data;
                    });
            }
            $scope.search();
        }
    ]);