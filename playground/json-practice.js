const fs = require("fs");
const dataJSON = fs.readFileSync("./myData.json", "utf8");
const data = JSON.parse(dataJSON);
data.name = "jeevan";
data.sirname = "sadalge";
data.age = 29;

const dataToWrite = JSON.stringify(data);
fs.writeFileSync("myData.json", dataToWrite);
