describe('Controller: MainCtrl', function () {
    var MainCtrl, scope;

    beforeEach(module('todoApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach an array of todos to scope', function () {
        expect(typeof scope.todos).toBe('object');
    });

    it('should attach an add function to scope', function() {
        expect(typeof scope.add).toBe('function');
    });

    it('should push an object with a text property onto todos i.e. scope.todos.push({text: todo})', function() {
        scope.add('Horse');
        expect(scope.todos.pop().text).toEqual('Horse');
    });

    it('should empty scope.newTodo on add', function() {
        scope.newTodo = 'Horse';
        scope.add();
        expect(scope.newTodo).toBeUndefined();
    });

    it('should attach a delete method to scope', function() {
        expect(typeof scope.delete).toBe('function');
    });

    it('should delete items on given index', function() {
        scope.add('A');
        scope.add('B');
        scope.add('C');

        var index = scope.todos.length - 1;
        scope.delete(index);

        expect(scope.todos.pop().text).toBe('B');
    });
})