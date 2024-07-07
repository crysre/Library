const formShower = document.getElementById("formContainer");
const addBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkbox = document.getElementById("isRead");
const booksContainer = document.querySelector(".booksContainer");
const ogForm = document.querySelector(".formDiv");
const cancelButton = document.getElementById("cancelButton");

let id = 0;
const myLibrary = [];

function Book(title, author, pages, isRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;    
    this.id = id;
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value, checkbox.checked, id++);
    myLibrary.push(newBook);
}

function displayBooks() {
    booksContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        <button  class="removeButton r" data-id="${book.id}">Remove</button>
        <button  id="readStatus" class="readstatusButton r" data-id="${book.id}">${book.isRead ? "Read" : "Didn't read"}</button>
        `;
        booksContainer.appendChild(newDiv);
    });
    addRemoveListeners();
    addReadStatusListeners();
}

function addRemoveListeners() { 
    const removeButtons = document.querySelectorAll(".removeButton");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.dataset.id, 10);
            myLibrary.splice(myLibrary.findIndex(book => book.id === id), 1);
            displayBooks();
        });
    });
}

function addReadStatusListeners() {
    const readstatusButtons = document.querySelectorAll(".readstatusButton");
    readstatusButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.dataset.id, 10);
            const book = myLibrary.find(book => book.id === id);
            book.isRead = !book.isRead;
            displayBooks();
        });
    });
}

formShower.addEventListener("click", () => {
    ogForm.style.opacity = 1;
});

cancelButton.addEventListener("click", () => {
    ogForm.style.opacity = 0;
});

addBook.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
});
