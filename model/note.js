function Note(body){
  this.body = body;
  this.abbrv = function() {
    if (body.length > 20) {
      return this.body.substring(0,19);
    } else {
      return this.body;
    }
  };
}
