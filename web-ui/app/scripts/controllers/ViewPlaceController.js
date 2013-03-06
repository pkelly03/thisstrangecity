'use strict';

app.controller('ViewPlaceController', function($scope, $routeParams, PlacesService) {
    $scope.place = PlacesService.get({id:$routeParams.placeId});
});
