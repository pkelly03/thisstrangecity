'use strict';

app.controller('ViewPlaceController', function($scope, PlacesService) {
    $scope.place = PlacesService.get($scope.id);
});
