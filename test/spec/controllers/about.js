describe('Controller: AboutCtrl', function () {
    var AboutCtrl, scope;

    beforeEach(module('todoApp'));

    beforeEach(function () {

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            AboutCtrl = $controller('AboutCtrl', {
                $scope: scope
            });
        });
    });

    it('should attach a about variable to scope', function () {
        expect(scope.about).toBeDefined();
    });
})