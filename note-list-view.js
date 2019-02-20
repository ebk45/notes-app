'use-strict';

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.addNote = function(note) {
    this.noteList.createNote(note);
  };

  NoteListView.prototype.showList = function(noteList) {
    return this.noteList.showList();
  };

  NoteListView.prototype.viewList = function() {
    let html = this.showList().map(note => {
      return "<li><div>" + note.getNote() + "</div></li>";
    })
    return "<ul>" + html.join("") + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
