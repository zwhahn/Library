const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const cardContainer = document.querySelector(".card-container");

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addBookToScreen(book)
}

addBookToLibrary('Six Seasons', 'Joshua Mcfadden', 423, true);
addBookToLibrary('French Patisserie', 'Ferrandi', 674, true);
addBookToLibrary("What's For Dessert", 'Claire Saffitz', 267, undefined);
addBookToLibrary('The art of French Cooking', 'Julia Child', 232, undefined);
addBookToLibrary('Beard on Bread', 'James Beard', 345, true);
console.log(myLibrary);


function addBookToScreen(book) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.textContent = book.title;
    cardContainer.appendChild(card);
}

const dialog = document.querySelector("dialog")
const newBookButton = document.querySelector("#new-book-btn")

newBookButton.addEventListener("click", () => {
    dialog.showModal();
})

const addToLibraryBtn = document.querySelector("#add-to-library-btn")
const form = document.getElementById("new-book-form");

function getData(form) {
    var formData = new FormData(form);
    formDataObject = Object.fromEntries(formData);
    addBookToLibrary(formDataObject.title, formDataObject.author, formDataObject.pages, formDataObject.read)
}

addToLibraryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getData(form);
})