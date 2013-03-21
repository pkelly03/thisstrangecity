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

    var $scope, ListPlacesController, $window, mockNavigator;

    beforeEach(module('webUiApp'));
    beforeEach(module('appWithDummyService'));

    beforeEach(inject(function( $rootScope, $controller, PlacesService) {
        $scope = $rootScope.$new();
        var geoCurrentPosition = function () {};
        mockNavigator = {geolocation : { getCurrentPosition : geoCurrentPosition}};
        $window = {navigator : mockNavigator};
        spyOn($window.navigator.geolocation, 'getCurrentPosition');
        ListPlacesController = $controller('ListPlacesController', {
          $scope: $scope,
            $window : $window
        });
    }));

    it('should make a call to PlacesService and copy value to coolPlacesList', inject(function (PlacesService) {
        expect($scope.places.length).toEqual(2);
    }));
    it('should make a call to navigator service', inject(function (PlacesService) {
        expect($window.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
    }));
});