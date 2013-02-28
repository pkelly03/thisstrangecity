'use strict';
describe('Service: PlacesService', function () {

    var $httpBackend;
    var createUrl = function () {
        return  'https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces?apiKey=' + 'aKe_m6K7U-MLQqOWlVo3VNhY2aKuppEW';
    };

    beforeEach(module('webUiApp'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should call retrieve all cool places', inject(function (PlacesService) {
        $httpBackend.expect('GET', createUrl())
            .respond([{name: "Look Mum No Hands", location: "Old St"},{name: "Modern Pantry", location: "Clerkenwell"}]);

        var result = PlacesService.query();
        $httpBackend.flush();

        expect(result[0].name).toEqual('Look Mum No Hands');
        expect(result[0].location).toEqual('Old St');
    }));

    it('should retrieve a cool place given a valid id', function() {
        $httpBackend.expect('GET', createUrl())
            .respond([{name: "Look Mum No Hands", location: "Old St"},{name: "Modern Pantry", location: "Clerkenwell"}]);

    });

});
