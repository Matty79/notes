function printAbbrNotes(notepad) {
  var abbrP = document.getElementById("abbrv")

  notepad.notes.forEach( function(note) {
    abbrP.innerHTML = abbrP.innerHTML + note.abbrNote();
  });

}
