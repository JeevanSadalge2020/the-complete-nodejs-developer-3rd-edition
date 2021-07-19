const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");

// Before running this application, Please delete all the .txt files

// NOTE create a note.txt file and write in it
fs.writeFileSync("notes.txt", "Jeevan Sadalge");

// NOTE Append a text inside it
fs.appendFileSync("notes.txt", "\nA Full Stack Developer");

// NOTE create a email.txt file and write a mail in it
fs.writeFileSync("email.txt", "jeevansadalg@gmail.com");

// NOTE Read content from email.txt file
const email = fs.readFileSync("email.txt", "utf8");
if (validator.isEmail(email)) {
  console.log(chalk.black.bgGreen.bold("EMAIL IS VALID"));
} else {
  console.log(chalk.white.bgRed.bold("EMAIL IS INVALID"));
}
