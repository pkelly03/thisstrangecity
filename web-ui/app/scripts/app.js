'use strict';
var app = angular.module('webUiApp',['ngResource']);

app.constant('API_KEY', 'aKe_m6K7U-MLQqOWlVo3VNhY2aKuppEW');

app.config([
    '$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/ListPlaces.html',
            controller: 'ListPlacesController'
        });

        $routeProvider.when('/places', {
            templateUrl: 'views/ListPlaces.html',
            controller: 'ListPlacesController'
        });

        $routeProvider.when('/places/:placeId', {
            templateUrl: 'views/ViewPlace.html',
            controller: 'ViewPlaceController'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });

        return $routeProvider;
    }
]);
