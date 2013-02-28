'use strict';

app.controller('ViewPlaceController', function($scope, PlacesService) {
    $scope.coolPlacesList = PlacesService.get();
});
