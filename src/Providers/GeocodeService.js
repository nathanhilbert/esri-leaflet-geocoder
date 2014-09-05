L.esri.Controls.Geosearch.Providers.GeocodeServer = L.esri.Services.Geocoding.extend({
  options: {
    label: 'Geocode Server',
    maxResults: 5,
    outFields: '*'
  },
  suggestions: function(map, text, options, callback){
    callback(undefined, []);
    return false;
  },
  results: function(map, text, key, options, callback){
    var params = {
      outSr: 4326
    };

    params.maxLocations = options.maxResults;

    if((options.useMapBounds === true || (options.useMapBounds <= map.getZoom())) && options.useMapBounds !== false){
      params.bbox = L.esri.Util.boundsToExtent(map.getBounds());
    }

    return this.geocode(text, params, callback);
  }
});

L.esri.Controls.Geosearch.Providers.geocodeServer = function(url, options){
  return new L.esri.Controls.Geosearch.Providers.GeocodeServer(url, options);
};