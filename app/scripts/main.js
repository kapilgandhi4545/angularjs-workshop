angular.module('todoApp').controller('MainCtrl', function ($scope, angularFire, Firebase) {

    var ref = new Firebase('https://todowithfriends.firebaseio.com');

    $scope.todos = [];

    angularFire(ref, $scope, 'todos');

    $scope.add = function (todo) {
        $scope.todos.push({text: todo});
        $scope.newTodo = undefined;
    };

    $scope.delete = function (i) {
        $scope.todos.splice(i, 1);
    };

});