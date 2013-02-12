(function() {
  'use strict';

  angular.module('webUiApp', []).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
