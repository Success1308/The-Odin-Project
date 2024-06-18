if (!localStorage.getItem("storedarr")) {
  localStorage.setItem("storedarr", JSON.stringify([]));
}

// Retrieve stored data
const storedData = localStorage.getItem("storedarr");
//define new array for empty if no previous data
const bookArr = JSON.parse(storedData);

// Display books on page load
displayBook(bookArr);

function createBook(title, author, page, year, BookStatus) {
  return {
    title: title,
    author: author,
    page: page,
    year: year,
    BookStatus: BookStatus,
  };
}

const bookName = document.querySelector("#book");
const authorName = document.querySelector("#author");
const pages = document.querySelector("#pages");
const yeardata = document.querySelector("#year");
const bookStatusdata = document.querySelector("#Book-status");
const submitBtn = document.querySelector("#submit");
const bookForm = document.querySelector("#bookForm");

bookForm.addEventListener("submit", addBook);

function addBook(event) {
  event.preventDefault();

  if (!bookForm.checkValidity()) {
    bookForm.reportValidity();
    return;
  }

  const book = bookName.value;
  const author = authorName.value;
  const page = pages.value;
  const year = yeardata.value;
  const BookStatus = bookStatusdata.value;
  const newBook = createBook(book, author, page, year, BookStatus);

  bookArr.push(newBook);
  displayBook(bookArr);
  storeData(bookArr);
  bookForm.reset();
}

function displayBook(bookArr) {
  const bookList = document.querySelector(".book-list");
  bookList.innerHTML = "";

  bookArr.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = `Title : ${book.title}`;

    const authorName = document.createElement("p");
    authorName.textContent = `Author : ${book.author}`;

    const pageNo = document.createElement("p");
    pageNo.textContent = `Pages : ${book.page}`;

    const bookYear = document.createElement("p");
    bookYear.textContent = `Year : ${book.year}`;

    const bookStatusa = document.createElement("select");
    bookStatusa.classList.add("select-sec");
    ["To-Read", "Reading", "Finished"].forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status;
      if (status === book.BookStatus) {
        option.selected = true;
      }
      bookStatusa.appendChild(option);
    });

    bookStatusa.addEventListener("change", function () {
      book.BookStatus = this.value;
      storeData(bookArr);
    });

    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove";
    removebtn.addEventListener("click", () => {
      bookArr.splice(index, 1);
      storeData(bookArr);
      displayBook(bookArr);
    });

    const btndiv = document.createElement("div");
    btndiv.classList.add("btns");

    btndiv.appendChild(bookStatusa);
    btndiv.appendChild(removebtn);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(authorName);
    bookCard.appendChild(pageNo);
    bookCard.appendChild(bookYear);
    bookCard.appendChild(btndiv);

    bookList.appendChild(bookCard);

    setTimeout(() => {
      bookCard.classList.add("appear");
    }, 10);
  });
}

// year filter
const yearAsc = document.querySelector(".yearAsc");
yearAsc.addEventListener("click", yearFilter);
function yearFilter() {
  const sortedBooks = [...bookArr].sort((a, b) => a.year - b.year);
  displayBook(sortedBooks);
}

// page filter
const pagesAsc = document.querySelector(".pagesAsc");
pagesAsc.addEventListener("click", pageFilter);
function pageFilter() {
  const sortedBooks1 = [...bookArr].sort((a, b) => a.page - b.page);
  displayBook(sortedBooks1);
}

// title filter

const titleAsc = document.querySelector(".titleAsc");
titleAsc.addEventListener("click", titleFilter);
function titleFilter() {
  const sortedBooks = [...bookArr].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  displayBook(sortedBooks);
}

// Authr filter

const authorAsc = document.querySelector(".authorAsc");
authorAsc.addEventListener("click", authorFilter);
function authorFilter() {
  const sortedBooks = [...bookArr].sort((a, b) =>
    a.author.localeCompare(b.author)
  );
  displayBook(sortedBooks);
}

// Storing the bookArr data in localStorage

function storeData(booksToStore) {
  localStorage.setItem("storedarr", JSON.stringify(booksToStore));
}
