// Global Values....................................................

const library =[];
const btn = document.querySelector('button');
const cancel = document.querySelector('.cancel');
let formSubmit = document.querySelector('.submit');
const readBooks = [];


// Book Object Constructor..............................

function Book (id,title,author,pages){
this.id = id,
this.title = title,

this.author = author,
this.pages = pages
};


//button.onclick = () => {window.open('hello!')};//

btn.addEventListener('click',function(){
  document.querySelector('.form-popup').style.display ='block';
});

cancel.addEventListener('click',function(){
  document.querySelector('.form-popup').style.display = 'none';
});

formSubmit.addEventListener('click',addBookToLibrary);

function addBookToLibrary(){
 let id=library.length+1;
  let title=document.querySelector('.input-title').value;
  let author=document.querySelector('.input-author').value;
  let pages=document.querySelector('.input-pages').value;
  let book= new Book(id,title,author,pages);
  console.log(book);
  library.push(book);
  document.querySelector('.form-popup').style.display ='none';

const card = createBookElement(book);
document.querySelector('.bookContainer').appendChild(card);
}

// function extractObjValue(){   // returns  all last pushed object values ........... 
//   let latestObj = library[library.length-1];
//   let value = Object.values(latestObj).join('');
//   console.log(value);
  
//   return value;
//   }

// formSubmit.addEventListener('click',createCard);


function createBookElement(book) {
  // Create a div element to hold the book information

  const id=book.id;
  const title=book.title;
  const author=book.author;
  const pages=book.pages;
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  bookDiv.id = `book-${id}`;
  bookDiv.className = 'bookCard';
  // Create elements for name, pages, and author
  const nameElem = document.createElement('h2');
  nameElem.textContent = title;

  const pagesElem = document.createElement('p');
  pagesElem.textContent = `Pages: ${pages}`;

  const authorElem = document.createElement('p');
  authorElem.textContent = `Author: ${author}`;

  // Create "Read" button
  const readBtn = document.createElement('button');
  readBtn.textContent = 'Read';
  readBtn.classList.add('readBtn');
  readBtn.dataset.bookId = id; // Set data attribute for book ID
//   readBtn.addEventListener('click', () =>{
//    let buttonText = readBtn.textContent;
//   if (buttonText === 'Read') {
//       readBtn.textContent = 'Unread';
//   } else {
//       readBtn.textContent = 'Read';
//   }
// } )

  // Create "Delete" button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.dataset.bookId = id; // Set data attribute for book ID

  deleteBtn.addEventListener('click', () => {
    const cardToRemove = document.getElementById(`book-${id}`);
    if (cardToRemove) {
        cardToRemove.remove();
    }
});

readBtn.addEventListener('click', () => {
  const buttonText = readBtn.textContent;
  if (buttonText === 'Read') {
      readBtn.textContent = 'Unread';
      readBooks.push(title); // Add book name to readBooks array
  } else {
      readBtn.textContent = 'Read';
      const index = readBooks.indexOf(title);
      if (index !== -1) {
          readBooks.splice(index, 1); // Remove book name from readBooks array
      }
      
  }
  console.log(readBooks);
  displayReadBooks();
  
});


  // Append name, pages, and author elements to the book div
  bookDiv.appendChild(nameElem);
  bookDiv.appendChild(pagesElem);
  bookDiv.appendChild(authorElem);

  // Append buttons to the book div
  bookDiv.appendChild(readBtn);
  bookDiv.appendChild(deleteBtn);

  
  // Return the book div element
  return bookDiv;


}

function displayReadBooks() {
  const readBooksList = document.createElement('ul');
  readBooks.forEach(bookName => {
      const listItem = document.createElement('li');
      listItem.textContent = bookName;
      readBooksList.appendChild(listItem);
  });
 document.body.appendChild(readBooksList);
}
console.log(readBooks);


