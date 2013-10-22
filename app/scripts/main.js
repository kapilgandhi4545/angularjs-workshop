angular.module('todoApp').controller('MainCtrl', function ($scope) {

    $scope.todos = [
        {text: 'Do something important'},
        {text:  'Be awesome', done: true}
    ];

    $scope.add = function (todo) {
        $scope.todos.push({text: todo});
        $scope.newTodo = undefined;
    };

    $scope.delete = function (i) {
        $scope.todos.splice(i, 1);
    };

});