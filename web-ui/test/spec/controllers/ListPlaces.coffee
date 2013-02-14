'use strict'

describe 'Controller: ListPlacesCtrl', () ->

  # load the controller's module
  beforeEach module 'webUiApp'

  ListPlacesCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller) ->
    scope = {}
    ListPlacesCtrl = $controller 'ListPlacesCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3;
