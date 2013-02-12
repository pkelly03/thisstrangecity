'use strict'

describe 'Controller: DetailCtrl', () ->

  # load the controller's module
  beforeEach module 'webUiApp'

  DetailCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller) ->
    scope = {}
    DetailCtrl = $controller 'DetailCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings.length).toBe 3;
