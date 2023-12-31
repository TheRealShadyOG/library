const myLibrary = [];

// turn into a class
class Book {
  constructor(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.name}, ${this.pages}, ${this.read}`
  }

}
  
function addBookToLibrary(object) {
    myLibrary.push(object);
}

const quran = new Book("Quran", "Allah", "604", "Read");
addBookToLibrary(quran);

const purificationOfTheHeart = new Book("Purification Of The Heart", "Hamza Yusuf", "220", 
                                        "Reading");
addBookToLibrary(purificationOfTheHeart);

// Function to display current books on .main
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (nameCheck(myLibrary[i].name) === 0 || authorCheck(myLibrary[i].author) === 0) {
    assembleCard();

    const main = document.querySelector('.main');
    let card = main.lastElementChild; 

    nameContent = card.querySelector('.namecontent');
    authorContent = card.querySelector('.authorcontent');
    pagesContent = card.querySelector('.pagescontent');
    readContent = card.querySelector('.readcontent');
    readBtn = card.querySelector('.readbtn');


    nameContent.textContent = `${myLibrary[i].name}`  
    authorContent.textContent = `${myLibrary[i].author}`
    pagesContent.textContent = `${myLibrary[i].pages}`
    readContent.textContent = `${myLibrary[i].read}`
    readBtn.textContent = `${myLibrary[i].read}`
    }
  }
  setDeleteBtn();
  updateSidebar();
}

// filter for displayBooks
function nameCheck(name) {
  let nameArray = getNameArray();
  let checkedName = nameArray.filter(word => word === name);
  return checkedName.length
}

function authorCheck(author) {
  let authorArray = getAuthorArray();
  let checkedAuthor = authorArray.filter(word => word === author);
  return checkedAuthor.length
}

// Get current cards name/author
function getNameArray() {
  const bookNameArray = document.querySelectorAll('.namecontent');
  let nameArray = [];
  for (let i = 0; i < bookNameArray.length; i++) {
    nameArray.push(bookNameArray[i].textContent)
  }
  return nameArray
} 

function getAuthorArray() {
  const bookAuthorArray = document.querySelectorAll('.authorcontent');
  let authorArray = [];
  for (let i = 0; i < bookAuthorArray.length; i++) {
    authorArray.push(bookAuthorArray[i].textContent)
  }
  return authorArray
}

// Function that makes new .card in .main

function assembleCard() {
  const nameContainer = document.createElement('div');
  const nameTitle = document.createElement('div');
  const nameContent = document.createElement('div'); 

  nameContainer.classList.add('namecontainer');
  nameContent.classList.add('namecontent');

  nameTitle.textContent = 'Name:';

  nameContainer.appendChild(nameTitle);
  nameContainer.appendChild(nameContent);

  const authorContainer = document.createElement('div');
  const authorTitle = document.createElement('div');
  const authorContent = document.createElement('div');

  authorContainer.classList.add('authorcontainer');
  authorContent.classList.add('authorcontent');

  authorTitle.textContent = 'Author:';

  authorContainer.appendChild(authorTitle);
  authorContainer.appendChild(authorContent);

  const pagesContainer = document.createElement('div');
  const pagesTitle = document.createElement('div');
  const pagesContent = document.createElement('div');

  pagesContainer.classList.add('pagescontainer');
  pagesContent.classList.add('pagescontent');

  pagesTitle.textContent = 'Pages:';

  pagesContainer.appendChild(pagesTitle);
  pagesContainer.appendChild(pagesContent);

  const readContainer = document.createElement('div');
  const readTitle = document.createElement('div');
  const readContent = document.createElement('div');

  readContainer.classList.add('readcontainer');
  readContent.classList.add('readcontent');

  readTitle.textContent = 'Read:';

  readContainer.appendChild(readTitle);
  readContainer.appendChild(readContent);

  const img = document.createElement('img');
  img.setAttribute('src', './assets/x.svg');
  img.classList.add('bookdelete');    

  const btn = document.createElement('button');
  btn.classList.add('readbtn');
  btn.setAttribute('onClick', 'changeReadStatus(this)')

  const card = document.createElement('div');
  card.classList.add('card');

  card.appendChild(nameContainer);
  card.appendChild(authorContainer);
  card.appendChild(pagesContainer);
  card.appendChild(readContainer);
  card.appendChild(img);
  card.appendChild(btn);

  let main = document.querySelector('.main');
  main.appendChild(card);

  return [nameContent, authorContent, pagesContent, readContent]
}

// New book button opens dialog 
const newBookButton = document.getElementById('newbook');
const newBookDialog = document.getElementById('newbookdialog');

newBookButton.addEventListener('click', () => {
  newBookDialog.show();
});

function closeDialog() {
  newBookDialog.close()
  document.getElementById('dialogform').reset();
}

// Save dialog into new book in library
function addNewBook() {
  const newName = document.getElementById('name').value;
  const newAuthor = document.getElementById('author').value;
  const newPages = document.getElementById('pages').value;
  const newRead = getRadioValue();

  if (newName !== '' && newAuthor !== '' && newPages !== '' & newRead !== '') {
    let newbook = new Book(newName, newAuthor, newPages ,newRead)
    addBookToLibrary(newbook);
  }
}

function getRadioValue() {
  let radioValues = document.getElementsByName('read');

  for (i = 0; i < radioValues.length; i++) {
    if (radioValues[i].checked) {
      return radioValues[i].value
    }
  }
}

const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', () => {
  addNewBook();
  displayBooks();
  setDeleteBtn();
  closeDialog();
  updateSidebar();
});

// card x img deletes book from library
function setDeleteBtn() {
  let bookDeleteBtn = document.getElementsByClassName('bookdelete');
  for (i = 0; i < bookDeleteBtn.length; i++) {
    bookDeleteBtn[i].addEventListener('click', (e) => {  
      let card = e.target.parentElement;
      let name = e.target.parentElement.children[0].lastChild.textContent;
      let author = e.target.parentElement.children[1].lastChild.textContent;
      deleteBook(card);
      removeFromLibrary(name, author);
      updateSidebar();
    });
  }
}

function deleteBook(card) {
  const main = document.querySelector('.main');
  main.removeChild(card);
}

function removeFromLibrary(name, author) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (name === myLibrary[i].name && author === myLibrary[i].author) {
      const deleted = myLibrary.splice(i, 1);
    }
  }
}

function changeReadStatus(e) {
  let card = e.parentElement;
  let cardName = e.parentElement.children[0].lastChild.textContent;
  let cardAuthor = e.parentElement.children[1].lastChild.textContent;

  readContent = card.querySelector('.readcontent');
  readBtn = card.querySelector('.readbtn');

  for (let i = 0; i < myLibrary.length; i++) {
    if (cardName === myLibrary[i].name && cardAuthor === myLibrary[i].author) {
      
      if (myLibrary[i].read === 'Read') {
        myLibrary[i].read = 'Unread';
        readContent.textContent = myLibrary[i].read
        readBtn.textContent = myLibrary[i].read
      } else if (myLibrary[i].read === 'Unread') {
        myLibrary[i].read = 'Reading';
        readContent.textContent = myLibrary[i].read
        readBtn.textContent = myLibrary[i].read
      } else if (myLibrary[i].read === 'Reading') {
        myLibrary[i].read = 'Read';
        readContent.textContent = myLibrary[i].read
        readBtn.textContent = myLibrary[i].read
      }
    }
  }
  updateSidebar();
}

// Have sidebar numbers accurate to myLibrary
const sideRead = document.getElementById('sideread');
const sideReading = document.getElementById('sidereading');
const sideUnread = document.getElementById('sideunread');
const sideTotal = document.getElementById('sidetotal');

function updateSidebar() {
  let sideReadNum = 0;
  let sideReadingNum = 0;
  let sideUnreadNum = 0;
  for (let i = 0; i < myLibrary.length; i++) {
    
    if (myLibrary[i].read === 'Read') {
      sideReadNum += 1;
    } else if (myLibrary[i].read === 'Reading') {
      sideReadingNum += 1;
    } else if (myLibrary[i].read === 'Unread') {
      sideUnreadNum += 1;
    }
  }
  sideRead.textContent = sideReadNum;
  sideReading.textContent = sideReadingNum;
  sideUnread.textContent = sideUnreadNum;
  sideTotal.textContent = myLibrary.length;
}

// Make searchbar work 
const searchbar = document.getElementById('search');

searchbar.addEventListener('keyup', () => {
  let searchbarText = document.getElementById('search').value;
  let names = document.getElementsByClassName('namecontent');
  let authors = document.getElementsByClassName('authorcontent');

  if (searchbarText.includes(':')) {
    let searchArray = searchbarText.split(':');
    let searchSelector = searchArray[0].toLowerCase();
    let searchText = searchArray[1].toLowerCase();

    if (searchText !== '') {
      if (searchSelector === 'name') {
        for (let i = 0; i < names.length; i++) {
          if (names[i].textContent.toLowerCase().indexOf(searchText) > -1) {
            names[i].parentElement.parentElement.classList.add('searched');
          } else {
            names[i].parentElement.parentElement.classList.remove('searched');
          }
        }
      } else if (searchSelector === 'author') {
        for (let i = 0; i < authors.length; i++) {  
          if (authors[i].textContent.toLowerCase().indexOf(searchText) > -1) {
            authors[i].parentElement.parentElement.classList.add('searched');
          } else {
            names[i].parentElement.parentElement.classList.remove('searched');
          }
          }
      } 
    } else {
      let removeClass = document.querySelectorAll('.searched');
      removeClass.forEach( (e) => {
        e.classList.remove('searched');
      });
    }
  }  else {
    let removeClass = document.querySelectorAll('.searched');
      removeClass.forEach( (e) => {
        e.classList.remove('searched');
      });
  }
});

displayBooks();