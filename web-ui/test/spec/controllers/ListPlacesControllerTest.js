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

describe('Controller: ListPlacesController', function () {

    var $scope, ListPlacesController;

    beforeEach(module('webUiApp'));
    beforeEach(module('appWithDummyService'));

    beforeEach(inject(function($rootScope, $controller, PlacesService) {
        $scope = $rootScope.$new();
        ListPlacesController = $controller('ListPlacesController', {
          $scope: $scope 
        });
    }));

    it('should make a call to PlacesService and copy value to coolPlacesList', inject(function (PlacesService) {
        expect($scope.coolPlacesList.length).toEqual(2);
    }));
});