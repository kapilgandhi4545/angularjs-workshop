describe('Controller: MainCtrl', function () {
    var MainCtrl, scope;

    beforeEach(module('workshopApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    -  it('should attach a list of awesomeThings to the scope', function () {
        -    expect(scope.awesomeThings.length).toBe(3);
        -  });


})