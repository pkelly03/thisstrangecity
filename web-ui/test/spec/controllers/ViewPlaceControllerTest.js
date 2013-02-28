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

    xit('should return details of a cool place for viewing', function () {
        return expect(scope.awesomeThings.length).toBe(3);
    });
});
