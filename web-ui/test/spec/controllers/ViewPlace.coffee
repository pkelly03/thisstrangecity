'use strict'

describe 'Controller: ViewPlaceCtrl', () ->

  # load the controller's module
  beforeEach module 'webUiApp'

  ViewPlaceCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller) ->
    scope = {}
    ViewPlaceCtrl = $controller 'ViewPlaceCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3;
