'use-strict';

(function(exports) {
  function NoteList() {
    this.list = []
  };

  NoteList.prototype.createNote = function(text) {
    this.list.push(new Note(text));
  };

  NoteList.prototype.showList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
