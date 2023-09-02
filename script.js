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

const quran = new Book("Quran", "604", "Read");
addBookToLibrary(quran);

const purificationOfTheHeart = new Book("Purification Of The Heart by Hamza Yusuf", "220", 
                                        "Currently Reading");
addBookToLibrary(purificationOfTheHeart);
