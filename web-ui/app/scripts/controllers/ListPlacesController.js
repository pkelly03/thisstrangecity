'use strict';

app.controller('ListPlacesController', function($scope, PlacesService) {
    $scope.places = PlacesService.query();
});
