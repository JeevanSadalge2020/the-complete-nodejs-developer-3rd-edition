// const fs = require("fs");
// IMPORTANT Terminal string styling done right
// const chalk = require("chalk");
// IMPORTANT Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
const yargs = require("yargs");
const notes = require("./notes");
const chalk = require("chalk");

yargs.version("1.1.0");
// NOTE ADD command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(chalk.bgBlueBright.blackBright("Adding your note"));
    notes.addNote(argv.title, argv.body);
  },
});

// NOTE REMOVE command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(chalk.bgBlueBright.blackBright("Removing your note"));
    notes.removeNote(argv.title);
  },
});

// NOTE LIST command
yargs.command({
  command: "list",
  describe: "lists all the notes",
  handler() {
    console.log(chalk.bgBlueBright.blackBright("Below are all your notes"));
    notes.listNotes();
  },
});

// NOTE READ command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(chalk.bgYellowBright.grey("Reading your note"));
    notes.readNote(argv.title);
  },
});
yargs.argv;
