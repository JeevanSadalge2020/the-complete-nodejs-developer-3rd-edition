const geoCode = require("./utils/geocode");
const foreCast = require("./utils/forecast");
const add = process.argv[2];

geoCode(add, (err, { location, longitude, lattitude } = {}) => {
  if (!add) console.log("please provide a address");
  else {
    if (err) console.log(err);
    else {
      // const  = data;
      foreCast(longitude, lattitude, (error, forecastData) => {
        if (error) console.log(error);
        else {
          console.log("You are currently seeing weather for", location);
          console.log(forecastData);
        }
      });
    }
  }
});
