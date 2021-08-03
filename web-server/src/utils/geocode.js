const request = require("request");
function geoCode(address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json/?access_token=pk.eyJ1IjoiamVldmFuc2FkYWxnZSIsImEiOiJja2pheG04d3o1bmhtMnluNGhqenVxenNkIn0.XbbyvmvZZgI2TNIZ1cHJag&limit=1&language=en`;
  request({ url, json: true }, (err, res, body) => {
    if (err) callback("Unable to connect to location services", undefined);
    else if (body.features.length === 0)
      callback("Provide a valid location", undefined);
    else {
      callback(undefined, {
        location: body.features[0].place_name_en,
        longitude: body.features[0].center[0],
        lattitude: body.features[0].center[1],
      });
    }
  });
}
module.exports = geoCode;
