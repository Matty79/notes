function Notepad(){

}

Notepad.prototype.addNote = function (note) {
return note;
};

Notepad.prototype.abbrNote = function (note) {
  if(note.length > 20) {
    note = note.substring(0,19)+"...";
}
return note;
};
