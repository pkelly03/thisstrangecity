'use strict';

app.controller('ListPlacesController', function ($scope, $window, PlacesService) {
    $scope.places = PlacesService.query();
    $window.navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $scope.currentLocation = { lon:longitude, lat:latitude};
    });

});
