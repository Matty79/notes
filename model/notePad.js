function Notepad(){
this.notes = [];
}

Notepad.prototype.note = function(){
  var notestore = this.notes;
  document
  .getElementById("create")
    .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
      Notepad.prototype.list();
      Notepad.prototype.create();
      Notepad.prototype.store(notestore);
    });
};

Notepad.prototype.create = function(){
  var para = document.createElement("p");
  var p = document.getElementById("para");
  para.appendChild(document.createTextNode(document.getElementById("content").value));
  p.appendChild(para);
};

Notepad.prototype.abbrNote = function(note) {
  if(note.length > 20) {
    return note.substring(0,19)+"...";
  } else {
    return note;
  }
};

Notepad.prototype.list = function(array){
  var ul = document.getElementById("abbrv");
  var li = document.createElement("li");
  var a = document.createElement("a");
  var abNote = document.createTextNode(Notepad.prototype.abbrNote(document.getElementById("content").value));
  a.setAttribute('href', "http://google.com");
  a.appendChild(abNote);
  li.appendChild(a);
  ul.appendChild(li);
};

Notepad.prototype.store = function (notestore) {
  var notestring = document.getElementById("content").value;
  notestore.push(notestring);
};
