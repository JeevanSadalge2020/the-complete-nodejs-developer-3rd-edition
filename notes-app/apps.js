const yargs = require("yargs");

console.log("........executing apps.js..........");

yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("========adding a note=========");
  },
});

console.log(yargs.argv);
