'use strict';

describe('Service: ListCoolPlaces', function () {

  // load the service's module
  beforeEach(module('webUiApp'));

  // instantiate service
  var ListCoolPlaces;
  beforeEach(inject(function (_ListCoolPlaces_) {
    ListCoolPlaces = _ListCoolPlaces_;
  }));

  it('should do something', function () {
    expect(!!ListCoolPlaces).toBe(true);
  });

});
