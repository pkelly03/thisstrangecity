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

describe('Controller: ListPlacesCtrl', function () {

    var $scope, controller;

    // var  $httpBackend, ListPlacesCtrl;

    beforeEach(module('webUiApp'));
    beforeEach(module('appWithDummyService'));

    beforeEach(inject(function($rootScope, $controller, ListCoolPlacesService) {
        $scope = $rootScope.$new();
        controller = $controller('ListPlacesCtrl', {
          $scope: $scope 
        });
    }));

    it('should make a call to ListCoolPlacesService and copy value to coolPlacesList', inject(function (ListCoolPlacesService) {
        expect($scope.coolPlacesList.length).toEqual(2);
    }));
});