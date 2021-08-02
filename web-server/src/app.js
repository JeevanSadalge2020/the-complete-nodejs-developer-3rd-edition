const express = require("express");
const path = require("path");
const app = express();

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
  res.send("weather");
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

app.listen(3000, () => console.log("server is listening on port 3000"));
