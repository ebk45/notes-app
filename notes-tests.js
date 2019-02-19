'use-strict';

function testNoteTextContainsString() {
  var note = new Note("Javascript is my favourite language");
  assert.isTrue(note.getNote() === "Javascript is my favourite language");
};

(function(exports) {
  function testNoteListContainsNote() {
    var noteList = new NoteList();
    noteList.addNote("going shopping");
    if (noteList.list.includes("going shopping") === false) {
      throw new Error("Note not stored in Note List");
    }
  };
  exports.testNoteListContainsNote = testNoteListContainsNote;
})(this);
testNoteListContainsNote();
testNoteTextContainsString();
