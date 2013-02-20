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
'use strict';

angular.module('webUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
  });
