document.addEventListener("DOMContentLoaded", function(event) {
  notepad = new Notepad();
  console.log("page loaded");

  document.getElementById("create").onclick = function(clickEvent){
    notepad.createNote((document.getElementById("content").value));
    displayNotes();
    clickEvent.preventDefault();
  };

  function displayNotes() {
    notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    var i = 0;
    while (i < notepad.notes.length) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(notepad.notes[i].abbrv());
      node.appendChild(textnode);
      notesList.appendChild(node);
      i += 1;
    }
  }

});
