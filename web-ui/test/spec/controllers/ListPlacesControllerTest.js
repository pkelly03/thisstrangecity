'use strict';

describe('Controller: ListPlacesCtrl', function () {
    var  $httpBackend, ListPlacesCtrl;

    beforeEach(module('webUiApp'));
    beforeEach(inject(function($injector, $rootScope) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    xit('should expose query result in scope', inject(function($rootScope, $controller, ListCoolPlacesService) {

        $httpBackend.expect('GET', 'https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces/').respond(["one", "two"]);
        var scope = $rootScope.$new();

        var ctrl = $controller( ListPlacesCtrl, {
            $scope: scope,
            ListCoolPlacesService: ListCoolPlacesService
        });

        $httpBackend.flush();
        expect(scope.result.length).toEqual(2);
    }));
});
