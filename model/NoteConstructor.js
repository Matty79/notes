function Note(){
  this.body = "";
}

Note.prototype.updateBody = function (noteText) {
  this.body = noteText;
};

Note.prototype.abbrNote = function () {
  if(this.body.length > 20) {
    return this.body.substring(0,19)+"...";
  } else {
    //if note is shorter than 20 chars then just return the note
    return this.body;
  }
};
