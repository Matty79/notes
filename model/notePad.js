function Notepad(){
  this.notes = [];
}

Notepad.prototype.addNote = function (note) {
  this.notes.push(note);
};

Notepad.prototype.createNote = function (noteBody) {
  var note = new Note();
  note.updateBody(noteBody);
  this.addNote(note);
};

Notepad.prototype.abbrNotes = function (noteIndex) {
  return this.notes[noteIndex].abbrNote();
};
