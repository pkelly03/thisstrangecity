'use strict';
describe('Service: ListCoolPlacesService', function () {

    var $httpBackend;
    var createUrl = function () {
        return  'https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces?apiKey=' + 'aKe_m6K7U-MLQqOWlVo3VNhY2aKuppEW';
    };

    beforeEach(module('webUiApp'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should call all', inject(function (ListCoolPlacesService) {
        $httpBackend.expect('GET', createUrl())
            .respond([{name: "Look Mum No Hands", location: "Old St"},{name: "Modern Pantry", location: "Clerkenwell"}]);

        var result = ListCoolPlacesService.query();
        $httpBackend.flush();

        expect(result[0].name).toEqual('Look Mum No Hands');
        expect(result[0].location).toEqual('Old St');
    }));

});
