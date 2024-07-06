const formShower = document.getElementById("formContainer");
const addBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkbox = document.getElementById("isRead");
const booksContainer = document.querySelector(".booksContainer");
const ogForm = document.querySelector(".formDiv");
const cancelButton = document.getElementById("cancelButton");
const removeButton = document.querySelectorAll(".removeButton")

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
    const newBook = new Book(title.value,author.value, pages.value,checkbox.checked, id++)
    myLibrary.push(newBook);
}

function displayBooks () {
    booksContainer.innerHTML = "";
    myLibrary.forEach((book)=>{
        const newDiv = document.createElement("div");
        newDiv.classList.add("item")
        newDiv.innerHTML = `
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        <button class="r" data-id="${book.id}" id="rm" class="removeButton" >Remove</button>
        <button class="r" data-id="${book.id}" id="readStatus">${book.isRead ? "Read" : "Didn't read"}</button>
        `;
        booksContainer.appendChild(newDiv);
    });
}

formShower.addEventListener("click", (event)=>{
    ogForm.style.opacity = 1;
});

cancelButton.addEventListener("click", (event)=>{
    ogForm.style.opacity = 0;
})

addBook.addEventListener("click", (event)=>{
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
    

});

removeButton.addEventListener("click", (event)=>{

})