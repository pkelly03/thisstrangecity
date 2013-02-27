'use strict';
angular.module('appWithDummyService', ['ngResource'])
    .constant('API_KEY', 'testkey')
    .factory('ListCoolPlacesService', function($resource, API_KEY) {
        return {
            query: function() {
                return [{name: "Look Mum No Hands", location: "Old St"},{name: "Modern Pantry", location: "Clerkenwell"}];
            }
        };
    });

describe('Controller: ListPlacesController', function () {

    var $scope, controller;

    // var  $httpBackend, ListPlacesController;

    beforeEach(module('webUiApp'));
    beforeEach(module('appWithDummyService'));

    beforeEach(inject(function($rootScope, $controller, ListCoolPlacesService) {
        $scope = $rootScope.$new();
        controller = $controller('ListPlacesController', {
          $scope: $scope 
        });
    }));

    it('should make a call to ListCoolPlacesService and copy value to coolPlacesList', inject(function (ListCoolPlacesService) {
        expect($scope.coolPlacesList.length).toEqual(2);
    }));
});