'use strict';

app.controller('ListPlacesController', function($scope, ListCoolPlacesService) {
    $scope.coolPlacesList = ListCoolPlacesService.query();
});
