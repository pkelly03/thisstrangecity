'use strict';

describe('Service: ListCoolPlacesService', function () {

    var mockListCoolPlacesService;
    var $httpBackend
    var createUrl = function (testPart) {
        return  'https://api.mongolab.com/api/1/databases/testdb/collections/projects' + testPart + '?apiKey=testkey';
    };

    angular.module('test', ['ngResource'])
        .constant('API_KEY', 'testkey')
        .factory('ListCoolPlacesService', function (ListCoolPlacesService) {
            mockListCoolPlacesService = ListCoolPlacesService;
        });
    beforeEach(module('test'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    xit('should call all', function () {
        $httpBackend.expect('GET', createUrl('')).respond([{'_id':{'$oid':1}, 'key':'value'}]);

        var result = mockListCoolPlacesService.query();
        $httpBackend.flush();
    });

});
