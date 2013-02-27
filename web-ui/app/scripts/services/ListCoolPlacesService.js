'use strict';

app.factory('ListCoolPlacesService', function($resource, API_KEY) {
    var ListCoolPlacesService = $resource('https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces/:id',
    {
        apiKey: API_KEY
    });

    return ListCoolPlacesService;
});
