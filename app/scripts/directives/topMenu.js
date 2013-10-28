'use strict';

angular.module('todoApp')
    .directive('topMenu', function () {
        return {
            templateUrl: 'views/partials/topmenu.html',
            replace: true,
            restrict: 'E'
        };
    });
