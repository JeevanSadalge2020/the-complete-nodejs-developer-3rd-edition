const request = require("request");
function foreCast(longitude, lattitude, callback) {
  const url = `http://api.weatherstack.com/current?access_key=d272af71a658407b3a618bd116dfe2f3&query=${lattitude},${longitude}&units=s`;
  request({ url, json: true }, (err, response, body) => {
    if (err) callback("Unable to connect to weather service.", undefined);
    else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      console.log(body);
      callback(undefined, {
        weatherDescriptions: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelsLike: body.current.feelslike,
        observationTime: body.current.observation_time,
        country: body.location.country,
        location: body.location.name,
      });
    }
  });
}
module.exports = foreCast;
