'use strict';
var app = angular.module('webUiApp',['ngResource']);

app.constant('apiKey', 'aKe_m6K7U-MLQqOWlVo3VNhY2aKuppEW');

app.config([
    '$routeProvider', function($routeProvider) {
        return $routeProvider.when('/', {
            templateUrl: 'views/ListPlaces.html',
            controller: 'ListPlacesCtrl'
        }).when('/ListPlaces', {
                tempalteUrl: 'views/ListPlaces.html',
                controller: 'ListPlacesCtrl'
            }).when('/ViewPlace', {
                tempalteUrl: 'views/ViewPlace.html',
                controller: 'ViewPlaceCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    }
]);
