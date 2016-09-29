// var app = require('../app');
// var notepad = new Notepad();
var note = new Note();

// test("it features my note(s)",
// notepad.addNote("some kind of note"),
// "some kind of note"
// );
//
// lessThanTest("notes are abbreviated",
// notepad.abbrNote("super long notes are abbreviated"),
// "super long notes are..."
// );
// //
// //
// // test("it adds a note",
// //
// // )

test("it creates a new note",
      note.updateBody("This is a test note"),
      "This is a test note" === note.body
    );

    test("it abbreviates the note",
    note.abbrNote,
  )
  )
