const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return `${name}, ${pages}, ${read}`
    }
  }
  
function addBookToLibrary(object) {
    myLibrary.push(object);
}

const quran = new Book("Quran", "Allah", "604", "Read");
addBookToLibrary(quran);

const purificationOfTheHeart = new Book("Purification Of The Heart", "Hamza Yusuf", "220", 
                                        "Currently Reading");
addBookToLibrary(purificationOfTheHeart);
