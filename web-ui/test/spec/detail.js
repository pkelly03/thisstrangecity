(function() {
  'use strict';

  describe('Controller: DetailCtrl', function() {
    var DetailCtrl, scope;
    beforeEach(module('webUiApp'));
    DetailCtrl = {};
    scope = {};
    beforeEach(inject(function($controller) {
      scope = {};
      return DetailCtrl = $controller('DetailCtrl', {
        $scope: scope
      });
    }));
    return it('should attach a list of awesomeThings to the scope', function() {
      return expect(scope.awesomeThings.length).toBe(3);
    });
  });

}).call(this);
