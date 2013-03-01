'use strict';
var app = angular.module('webUiApp',['ngResource']);

app.constant('API_KEY', 'aKe_m6K7U-MLQqOWlVo3VNhY2aKuppEW');

app.config([
    '$routeProvider', function($routeProvider) {
        return $routeProvider
            .when('/', {
                templateUrl: 'views/ListPlaces.html',
                controller: 'ListPlacesController'
            })
            .when('/ListPlaces', {
                templateUrl: 'views/ListPlaces.html',
                controller: 'ListPlacesController'
            })
            .when('/ViewPlace', {
                templateUrl: 'views/ViewPlace.html',
                controller: 'ViewPlaceController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
