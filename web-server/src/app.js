const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const geoCode = require("./utils/geocode");
const foreCast = require("./utils/forecast");

const publicDir = path.join(__dirname, "..", "public");
const viewsDir = path.join(__dirname, "..", "views");

app.use(express.static(publicDir));

app.set("view engine", "ejs");
app.set("views", viewsDir);

app.get("", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "Weather",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Help",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    name: "About me",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) res.send("Please provide an address");
  else {
    geoCode(address, (err, data) => {
      if (err) res.send(err);
      else {
        foreCast(data.longitude, data.lattitude, (err, datas) => {
          if (err) res.send(err);
          else {
            res.send({
              location: address,
              forecast: datas.weatherDescriptions,
              temperature: datas.temperature,
              observationTime: datas.observationTime,
              feelsLikeTemperature: datas.feelsLike,
            });
          }
        });
      }
    });
  }
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Help article not found",
  });
});

app.use((req, res) => {
  res.render("404", {
    title: 404,
    name: "Page Not Found",
  });
});
// OR
// app.get("*", (req, res) => {
//   res.render("404", {
//     title: 404,
//     name: "Page Not Found",
//   });
// });

app.listen(port, () => console.log("server is listening on port", port));
