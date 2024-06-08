

 if(!localStorage.getItem('storedarr')){
    localStorage.setItem('storedarr', JSON.stringify([]));
  }

  // Retrieve stored data
  const storedData = localStorage.getItem('storedarr');
  //define new array for empty if no previous data
  const Book = JSON.parse(storedData);

  displayBook(Book);

  function createBook(title,author,year,bookStatus){
    return{
      title:title,
      author:author,
      year:year,
      bookStatus:bookStatus,
    }
  }

  function addBookToArr(event){
    event.preventDefault();

    if (!bookForm.checkValidity()) {
      bookForm.reportValidity();
      return;
    }
    const bookName = document.querySelector("#book").value;
    const authorName = document.querySelector("#author").value;
    const yearBook = document.querySelector("#year").value;
    const bookStatus = document.querySelector("#Book-status").value;
    const newBook = createBook(bookName, authorName, yearBook, bookStatus);
    Book.push(newBook);
    storeData(Book);
    bookForm.reset();
    bookForm.classList.add('hide');
    displayBook(Book);
  }

  function displayBook(Book){
    const bookList = document.querySelector(".main");
    bookList.innerHTML= '';
    const newForm = document.createElement('form');
    newForm.classList.add('sform');
    newForm.classList.add('hide');
    newForm.setAttribute('id','bookForm');
    newForm.innerHTML = `      
    <label for="book"> Book : </label>
    <input type="text" id="book" name="book" required > 

    <label for="author"> Author : </label>
    <input type="text" id="author" name="author" required >
    
    <label  for="year"> Year : </label>
    <input type="number" id="year" name="year" required min="1800" max="2024" >

    <select name="Book-status" id="Book-status" required >
        <option value="Book-status" selected disabled hidden>Book-status</option>
        <option value="To-Read">To Read</option>
        <option value="Reading">Reading</option>
        <option value="Finished">Finished</option>
    </select>

    <button id="submit" type="submit">Submit</button>`;
    bookList.appendChild(newForm);

    const addBook = document.querySelector('.add-book');
    const bookForm = document.querySelector('.sform');
  

    addBook.addEventListener('click', () =>{
      bookForm.classList.remove('hide');
      const submitForm = document.querySelector('#submit');
      submitForm.addEventListener('click', addBookToArr );
    });

    Book.forEach((book, index) => {

      const bookCard = document.createElement('div');
      bookCard.classList.add('card');

      const bookTitle = document.createElement('h1');
      bookTitle.textContent = `Title : ${book.title}`;

      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Author : ${book.author}`;

      const bookYear = document.createElement('p');
      bookYear.textContent = `Year : ${book.year}`;


      const bookSelect = document.createElement('select');
      ['Book-status','To-Read','Reading','Finished'].forEach((status) => {
        const bookOption = document.createElement('option');
        bookOption.value = status;    
        bookOption.textContent = status;

        if (status === book.bookStatus) {
          bookOption.selected = true;
        }

        bookSelect.appendChild(bookOption);
      });


      
      bookSelect.addEventListener('change', function() {
        book.bookStatus = this.value; 
        storeData(Book); 
      });

      const removeBtn = document.createElement('i');
      removeBtn.classList.add('fa-solid');
      removeBtn.classList.add('fa-xmark');

      removeBtn.addEventListener('click', (index) => {
        Book.splice(index, 1);
        storeData(Book);
        displayBook(Book);
      });


      
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookYear);
      bookCard.appendChild(bookSelect);
      bookCard.appendChild(removeBtn);

      
      bookList.appendChild(bookCard);


      setTimeout(() => {
        bookCard.classList.add('appear');
      }, 10);

    });

  }



  // store data
  function storeData(booksToStore) {
    localStorage.setItem('storedarr', JSON.stringify(booksToStore));
  }



































// steps

/* interval timer */
const
  timer = 10000,
  ui = document.getElementById('ui');

setInterval(function() {
  ui.classList.toggle('switch');
}, timer);

