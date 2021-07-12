let myLibrary = [];
const $ = (s) => document.querySelector(s);
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}
function addBook(book) {
  myLibrary.push(book);
  const row = document.createElement("tr");
  const titleEl = document.createElement("td");
  const authorEl = document.createElement("td");
  const pagesEl = document.createElement("td");
  const readEl = document.createElement("td");
  const buttonTd = document.createElement("td");
  const buttonEl = document.createElement("button");
  const rButtonEl = document.createElement("button");
  const rButtonTd = document.createElement("td");
  row.classList.add("data-row");
  $("table").appendChild(row);
  titleEl.textContent = book.title;
  row.appendChild(titleEl);
  authorEl.textContent = book.author;
  row.appendChild(authorEl);
  pagesEl.textContent = book.pages;
  row.appendChild(pagesEl);
  readEl.textContent = book.read;
  row.appendChild(readEl);
  row.appendChild(buttonTd);
  buttonTd.appendChild(buttonEl);
  buttonEl.textContent = "REMOVE";
  buttonEl.onclick = () => {
    const idxToRemove = myLibrary.findIndex((e) => e.title === book.title);
    removeBook(idxToRemove);
  };
  row.appendChild(rButtonTd);
  rButtonTd.appendChild(rButtonEl);
  rButtonEl.textContent = "READ";
  rButtonEl.onclick = () => {
    const idxToRead = myLibrary.findIndex((e) => e.title === book.title);
    toggleRead(idxToRead);
  };
}
const book1 = new Book("Harry Potter 1", "J.K.Rowling", 221, "not read yet");
const book2 = new Book("Harry Potter 2", "J.K.Rowling", 350, "already read");
addBook(book1);
addBook(book2);

const showBookForm = () => {
  $("form").style.display = "block";
};
const submitBook = () => {
  const titleEl = $("input[name=title]");
  const authorEl = $("input[name=author]");
  const pagesEl = $("input[name=pages]");
  const readEl = $("input[name=read]");
  if (titleEl.value === "") return;
  const book = new Book(
    titleEl.value,
    authorEl.value,
    pagesEl.value,
    readEl.value
  );
  addBook(book);
  titleEl.value = "";
  authorEl.value = "";
  pagesEl.value = "";
  readEl.value = "";
};
const removeBook = (n) => {
  document.querySelector(`tr.data-row:nth-of-type(${n + 1})`).remove();
  myLibrary.splice(n, 1);
};
const toggleRead = (n) => {
  const readTd = document.querySelector(
    `tr.data-row:nth-of-type(${n + 1}) td:nth-of-type(${4})`
  );
  console.log(n);
  if (readTd.textContent === "already read") {
    readTd.textContent = "not read yet";
    myLibrary[n].read = "not read yet";
  } else {
    readTd.textContent = "already read";
    myLibrary[n].read = "already read";
  }
};
