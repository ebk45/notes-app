'use-strict';

function testNoteTextContainsString() {
  var note = new Note("Javascript is my favourite language");
  assert.isTrue(note.getNote() === "Javascript is my favourite language");
};

testNoteTextContainsString();
