'use strict';

app.factory('ListCoolPlacesService', function($resource, apiKey) {
    var ListCoolPlacesService = $resource('https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces/:id',
    {
        apiKey: apiKey
    });

    ListCoolPlacesService.prototype.done = false;

    return ListCoolPlacesService;
});
