// var app = require('../app');
var notepad = new Notepad();

test("it features my note(s)",
notepad.addNote("some kind of note"),
"some kind of note"
);

lessThanTest("notes are abbreviated",
notepad.abbrNote("super long notes are abbreviated"),
"super long notes are..."
);
//
//
// test("it adds a note",
//
// )
