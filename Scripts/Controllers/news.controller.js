/// <reference path="../angular.js" />

angular.module("newsBlogModule")
    .controller("NewsController",
    [
        "$scope",
        "$http",
        function($scope, $http) {
            $scope.title = "News";

            $scope.newPost = {};

            $scope.addNews = function () {
                $http.post($scope.api + '/posts', $scope.newPost)
                    .then(function() {
                        $scope.posts.push($scope.newPost);
                        $scope.newPost = {};
                    });


            }


            $scope.deleteNews = function (post) {
                $http.delete($scope.postDeleteUrl + post.id).success(function (data, status, headers, config) {
                    var index = $scope.posts.indexOf(post);
                    $scope.posts.splice(index, 1);
                }).error(function (response, status, headers, config) {
                    //$scope.message = data.msg;
                });
            }

            
               //// $scope.posts.splice(index, 1);
               // $scope.deleteNews = function (id) {
               //     $http.delete($scope.api + '/posts', { 'posts': id }).success(function (result) {
               //         console.log(result);
               //         $scope.resultDelete = result;
               //     }).error(function () {
               //         console.log("error");
               //     });
               // };

            
        }
    ]);