const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.black.bold.bgGreen("New note added"));
    saveNotes(notes);
  } else {
    console.log(chalk.bgRedBright.gray("Note title already taken"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataJSON);
};

function loadNotes() {
  try {
    const dataJson = fs.readFileSync("notes.json", "utf-8");
    const data = JSON.parse(dataJson);
    return data;
  } catch (error) {
    return [];
  }
}

function removeNote(title) {
  const oldNotes = loadNotes();
  const noteTitleExists = oldNotes.some(note => note.title === title);
  if (noteTitleExists) {
    const indexOfTitle = oldNotes.indexOf(oldNotes.title);
    oldNotes.splice(indexOfTitle, 1);
    console.log(chalk.bgGreen.bold("Note successfullt removed"));
    saveNotes(oldNotes);
  } else {
    console.log(chalk.bgYellow.black("The given note does not exists."));
  }
}
function listNotes() {
  console.log(loadNotes());
}

function readNote(title) {
  const oldNotes = loadNotes();
  const note = oldNotes.find(note => (note.title = title));
  console.log(chalk.yellow("Note Title:"), note.title);
  console.log(chalk.yellow("Note Body:"), note.body);
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
