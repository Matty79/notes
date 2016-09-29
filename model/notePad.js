function Notepad(){
  this.notes = [];
}

Notepad.prototype.createNote = function (body) {
  note = new Note(body);
  this.notes.push(note);
};
