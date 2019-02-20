'use-strict';

function testNoteTextContainsString() {
  var note = new Note("Javascript is my favourite language");
  assert.isTrue(note.getNote() === "Javascript is my favourite language");
};

function testNoteListContainsNote() {
  var noteList = new NoteList();
  noteList.addNote("going shopping");
  assert.isTrue(noteList.showList()[0].getNote().includes("going shopping"))
};

testNoteListContainsNote();
testNoteTextContainsString();
