'use strict';

app.controller('ListPlacesCtrl', function($scope, ListCoolPlacesService) {
    $scope.coolPlacesList = ListCoolPlacesService.query();
});
