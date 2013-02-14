(function() {
  'use strict';

  describe('Controller: ViewPlaceCtrl', function() {
    var ViewPlaceCtrl, scope;
    beforeEach(module('webUiApp'));
    ViewPlaceCtrl = {};
    scope = {};
    beforeEach(inject(function($controller) {
      scope = {};
      return ViewPlaceCtrl = $controller('ViewPlaceCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
