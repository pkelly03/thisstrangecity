(function () {
  'use strict';

  describe('Controller: ListPlacesCtrl', function () {
    var ListPlacesCtrl, scope;
    beforeEach(module('webUiApp'));
    ListPlacesCtrl = {};
    scope = {};
    beforeEach(inject(function($controller) {
      scope = {};
      return ListPlacesCtrl = $controller('ListPlacesCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function () {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
