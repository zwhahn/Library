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
    const card = document.createElement("div");
    card.classList.add("card");
    
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header")
    cardHeader.textContent = book.title;
    
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    for (info in book){
        if (info != 'title'){

            const infoTitle = document.createElement("div");
            infoTitle.classList.add("info-title")
            infoTitle.textContent = info;
    
            if (info == 'read') {
                if (!checkReadStatus(book[info])) {
                    book[info] = 'false'
                };
            }
    
            const infoValue = document.createElement("div");
            infoValue.classList.add("info-value")
            infoValue.textContent = book[info];
            infoContainer.appendChild(infoTitle);
            infoContainer.appendChild(infoValue);
            cardContent.appendChild(infoContainer);
        }
    
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
    
        cardContainer.appendChild(card);
        }
}

function checkReadStatus(alreadyRead){
    if (!alreadyRead) {
        return false;
    }
    else {
        return true;
    }
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