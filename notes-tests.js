'use-strict';

function testNoteTextContainsString() {
  var note = new Note("Javascript is my favourite language");
  assert.isTrue(note.getNote() === "Javascript is my favourite language");
};

function testNoteListContainsNoteObjects() {
  var list = new NoteList();
  list.addNote("going shopping")
  expect(list).toContain("going shopping")
};

testNoteTextContainsString();
