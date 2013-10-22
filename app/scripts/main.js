angular.module('todoApp').controller('MainCtrl', function ($scope, angularFire, Firebase) {

    var ref = new Firebase('https://todowithfriends.firebaseio.com/todos');

    $scope.todos = [];

    angularFire(ref, $scope, 'todos');

    $scope.add = function (todo) {
        ref.push({text: todo});
        $scope.newTodo = undefined;
    };

    $scope.delete = function (i) {
        ref.child(i).remove();
    };

});