/// <reference path="../angular.js" />

angular.module("newsBlogModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        "$httpProvider",

        function($routeProvider, $locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true);
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
            $routeProvider
                .when("/",
                {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: 'Home'

                })
                .when("/News",
                {
                    templateUrl: "Views/News.html",
                    controller: "NewsController",
                    caseInsensitiveMatch: true,
                    activeTab:'News'
                
                })
                .otherwise({
                    redirectTo: '/'
                });


        }
    ]);