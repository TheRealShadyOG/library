const myLibrary = [];

function Book(name, pages, read) {
    this.name = name
    this.pages = pages
    this.read = read
    this.info = function() {
      return `${name}, ${pages}, ${read}`
    }
  }
  
function addBookToLibrary(object) {
    myLibrary.push(object);
}