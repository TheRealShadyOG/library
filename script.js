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

// Function to display current books on .main
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    assembleCard();

    const main = document.querySelector('.main');
    let card = main.lastElementChild; 

    nameContent = card.querySelector('.namecontent');
    authorContent = card.querySelector('.authorcontent');
    pagesContent = card.querySelector('.pagescontent');
    readContent = card.querySelector('.readcontent');


    nameContent.textContent = `${myLibrary[i].name}`  
    authorContent.textContent = `${myLibrary[i].author}`
    pagesContent.textContent = `${myLibrary[i].pages}`
    readContent.textContent = `${myLibrary[i].read}`
  }
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
  img.classList.add('img');    

  const card = document.createElement('div');
  card.classList.add('card');

  card.appendChild(nameContainer);
  card.appendChild(authorContainer);
  card.appendChild(pagesContainer);
  card.appendChild(readContainer);
  card.appendChild(img);

  let main = document.querySelector('.main');
  main.appendChild(card);

  return [nameContent, authorContent, pagesContent, readContent]
}

// New book button opens dialog 
const newBookButton = document.getElementById('newbook');
const newBookDialog = document.getElementById('newbookdialog');

newBookButton.addEventListener('click', () => {
  newBookDialog.setAttribute('open', true);
});