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

function testNoteListViewShowsNotes() {
  var noteList = new NoteList();
  noteList.addNote("Favourite Drink: Vodka");
  noteList.addNote("Favourite Food: Vodka");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.viewList() === "<ul><li><div>Favourite Drink: Vodka</div></li><li><div>Favourite Food: Vodka</div></li></ul>")
}

testNoteListContainsNote();
testNoteTextContainsString();
testNoteListViewShowsNotes();
