const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('Six Seasons', 'Joshua Mcfadden', 423, true);
addBookToLibrary('French Patisserie', 'Ferrandi', 674, true);
addBookToLibrary("What's For Dessert", 'Claire Saffitz', 267, false);
addBookToLibrary('The art of French Cooking', 'Julia Child', 232, false);
addBookToLibrary('Beard on Bread', 'James Beard', 345, false);
console.log(myLibrary);

const container = document.querySelector(".container");

for (const book of myLibrary) {
    const card = document.createElement("div")
    card.textContent = book.title;
    container.appendChild(card);
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

    console.log(Object.fromEntries(formData));
}

addToLibraryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getData(form);
})