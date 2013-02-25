'use strict';

describe('Controller: ListPlacesCtrl', function () {
    var ListPlacesCtrl, scope;
    beforeEach(module('webUiApp'));
    ListPlacesCtrl = {};
    scope = {};
    beforeEach(inject(function ($controller) {
        scope = {};
        return ListPlacesCtrl = $controller('ListPlacesCtrl', {
            $scope:scope
        });
    }));
    return it('should make a call to ListCoolPlacesService to retrieve list of cool places', function () {
        return expect(scope.awesomeThings.length).toBe(3);
    });
});
