// Global Values....................................................

const library =[];
const btn = document.querySelector('button');
const cancel = document.querySelector('.cancel');
let formSubmit = document.querySelector('.submit');
const title=document.querySelector('.input-title').value;
const author=document.querySelector('.input-title').value;
const pages=document.querySelector('.input-pages').value;


// Book Object Constructor..............................

function Book (title,author,pages){
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
  let title=document.querySelector('.input-title').value;
  let author=document.querySelector('.input-title').value;
  let pages=document.querySelector('.input-pages').value;
  let book= new Book(title,author,pages);
  console.log(book);
  library.push(book);
  document.querySelector('.form-popup').style.display ='none';
  
}

function extractObjValue(){   // returns  all last pushed object values ........... 
  let latestObj = library[library.length-1];
  let value = Object.values(latestObj).join('');
  console.log(value);
  
  return value;
  }

formSubmit.addEventListener('click',createCard);

function createCard(){ //It create empty bookCard and buttons inside book container and append object Value from latest input.
  let bookDiv = document.createElement('div');   
  bookDiv.className = 'bookCard';
  document.querySelector('.bookContainer').appendChild(bookDiv);  
  let objValue=extractObjValue();
   bookDiv.textContent = objValue;
   let readBtn = document.getElementById('readBtn');
   readBtn.style.display = 'block';
  let deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.style.display = 'block';

  }


  let click =0;
  let readStatus = document.getElementById('readBtn');
readStatus.addEventListener('click',()=>{
  readStatus.textContent = 'UnRead';
    click++;
    console.log(click);
    if (click % 2 === 0){
      readStatus.textContent = 'Read';
    } 
  })


// console.log("title  " + title,'Author ' + author, 'Pages ' + pages);

// prompt("Enter the name of the Boook: ");
// var book= new Book("I love it", 210, 300, "R.K. Singh");
// function addBookToLibrary(name,pages,cost,author) {
//     let name=prompt("Enter the name of the Boook: ");
//     let cost=prompt("Enter the cost of the Boook: ");
//     let author=prompt("Enter the author of the Boook: ");
// }

