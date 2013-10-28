angular.module('todoApp', ['firebase']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
        .when('/about', {
            controller:'AboutCtrl',
            templateUrl:'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});