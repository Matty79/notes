function Notepad(){
  this.notes = [];
}

Notepad.prototype.addNote = function (note) {
  this.notes.push(note);
};

// Notepad.prototype.abbrNote = function (note) {
//   if(note.length > 20) {
//     note = note.substring(0,19)+"...";
// }
// return note;
// };
