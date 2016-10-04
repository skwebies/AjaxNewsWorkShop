/// <reference path="../angular.js" />

angular.module("newsBlogModule")
    .service("repository",
    [
        "$http",
        "$q",
        function ($http, $q) {
            this.getPosts = function (URL) {

                var ps = this;
                var deferred = $q.defer();

                $http.get(URL + "/posts")
                    .then(function (response) {
                        ps.posts = response.data;
                        deferred.resolve(response.data);
                    }, function() {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            }

            


            //searching request for authors and titles
            this.all = function (filterObject) {
                var defer = $q.defer();

                var result = [];

                for (var i = 0; i < this.posts.length; i++) {
                    if (filterObject.author != '' &&
                        this.posts[i].author.toLowerCase().indexOf(filterObject.author.toLowerCase()) == -1) {
                        continue;
                    }
                    if (filterObject.title != '' &&
                        this.posts[i].title.toLowerCase().indexOf(filterObject.title.toLowerCase()) == -1) {
                        continue;
                    }
                    result.push(this.posts[i]);
                }

                defer.resolve(result);

                return defer.promise;
            }
            
        }
    ]);