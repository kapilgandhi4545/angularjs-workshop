angular.module('todoApp', ['firebase']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});