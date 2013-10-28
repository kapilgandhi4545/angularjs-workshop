'use strict';

describe('Directive: topMenu', function () {
    var element,
        scope;


    beforeEach(module('todoApp'));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    xit('should render a top-menu template with a top-menu class', inject(function ($compile) {
        element = angular.element('<top-menu></top-menu>');
        element = $compile(element)(scope);
        expect(element.hasClass('top-menu')).toBe(true);
    }));
});
