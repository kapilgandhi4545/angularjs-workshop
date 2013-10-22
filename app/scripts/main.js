angular.module('todoApp').controller('MainCtrl', function ($scope) {

    $scope.todos = [];

    $scope.add = function (todo) {
        $scope.todos.push({text: todo});
        $scope.newTodo = undefined;
    };

    $scope.delete = function (i) {
        todos.splice(i, 1);
    };

});