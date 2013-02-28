'use strict';

app.controller('ListPlacesController', function($scope, PlacesService) {
    $scope.coolPlacesList = PlacesService.query();
});
