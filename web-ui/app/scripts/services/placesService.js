'use strict';

app.factory('PlacesService', function($resource, API_KEY) {
    return $resource('https://api.mongolab.com/api/1/databases/coolplaces/collections/coolplaces/:id', {
        apiKey: API_KEY, id:'@_id.$oid'
    });
});
