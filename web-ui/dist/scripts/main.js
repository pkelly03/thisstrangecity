(function() {
  'use strict';

  angular.module('webUiApp', []).config([
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

}).call(this);

'use strict';

angular.module('webUiApp', []).config([
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