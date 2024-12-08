const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

addBookToLibrary('Six Seasons', 'Joshua Mcfadden', 423);
addBookToLibrary('French Patisserie', 'Ferrandi', 674);
addBookToLibrary("What's For Dessert", 'JK', 267);
addBookToLibrary('The art of French Cooking', 'Julia Child', 232);
addBookToLibrary('Beard on Bread', 'James Beard', 345);
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