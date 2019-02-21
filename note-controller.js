
(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.addNote = function(note) {
    this.noteList.createNote(note);
  };

})(this);

var elem = document.getElementById('app');
console.log(elem)

const greeting = "howdy";

elem.innerHTML = greeting;
