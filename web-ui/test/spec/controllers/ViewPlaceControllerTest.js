'use strict';

describe('Controller: ViewPlaceController', function () {
    var ViewPlaceController, scope;
    beforeEach(module('webUiApp'));
    ViewPlaceController = {};
    scope = {};
    beforeEach(inject(function ($controller) {
        scope = {};
        return ViewPlaceController = $controller('ViewPlaceController', {
            $scope:scope
        });
    }));

    xit('should attach a list of awesomeThings to the scope', function () {
        return expect(scope.awesomeThings.length).toBe(3);
    });
});
