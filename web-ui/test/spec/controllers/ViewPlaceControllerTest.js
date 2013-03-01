'use strict';

angular.module('appWithDummyService', ['ngResource'])
    .constant('API_KEY', 'testkey')
    .factory('PlacesService', function($resource, API_KEY) {
        return {
            query: function() {
                return [{name: "Look Mum No Hands", location: "Old St"},{name: "Modern Pantry", location: "Clerkenwell"}];
            },
            get: function(id) {
                return {name:'Look Mum No Hands', location: 'Old St'};
            }
        };
    });


describe('Controller: ViewPlaceController', function () {

    var ViewPlaceController, scope, mockPlacesService;
    beforeEach(module('webUiApp'));
    beforeEach(module('appWithDummyService'));
    ViewPlaceController = {};

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should return details of a cool place for viewing', inject(function ($controller, PlacesService) {
        ViewPlaceController = $controller('ViewPlaceController', {
            $scope:scope
        });

        expect(scope.place.name).toBe('Look Mum No Hands');
        expect(scope.place.location).toBe('Old St');
    }));

    it('should make a call to placeService passing the place id', inject(function($controller, PlacesService) {
        var placeId = 'Look Mum No Hands';
        scope.id = placeId;
        mockPlacesService = PlacesService;
        spyOn(mockPlacesService, 'get');

        ViewPlaceController = $controller('ViewPlaceController', {
            $scope:scope
        });

        expect(mockPlacesService.get).toHaveBeenCalledWith(placeId);
    }));
});
