(function() {
  'use strict';

  angular.module('webUiApp', []).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      .when('/ListPlaces', {
        templateUrl: 'views/ListPlaces.html',
        controller: 'ListPlacesCtrl'
      })
      .when('/ViewPlace', {
        templateUrl: 'views/ViewPlace.html',
        controller: 'ViewPlaceCtrl'
      })
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
