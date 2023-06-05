let myLibrary = [];

const add = document.getElementById('add');
const modal = document.getElementById('form');
const books = document.getElementById('books');
const close = document.getElementById('close');

function retrieveForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const year = document.getElementById('year').value;
    const status = document.getElementById('status').value;

    const entry = new Book(title, author, pages, year, status);
    myLibrary.push(entry);
    addBook();
}

function Book(title, author, pages, year, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.status = status;
}

function allBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        addBook();
    }
}

function addBook() {
    let newBook = document.createElement('div');
    let newTitle = document.createElement('p');
    let newAuthor = document.createElement('p');
    let newPages = document.createElement('p');
    let newYear = document.createElement('p');
    let newStatus = document.createElement('p');

    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    newYear.textContent = myLibrary[i].year;
    newStatus.textContent = myLibrary[i].status;

    books.appendChild(newBook);
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newYear);
    newBook.appendChild(newStatus);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('year').value = '';
    document.getElementById('status').value = '';

    console.log(myLibrary);
}



modal.addEventListener('submit', (event) => {
    event.preventDefault();
    retrieveForm();
    modal.reset();
});

add.addEventListener('click', () => {
    modal.style.display = "block";
})

close.addEventListener('click', () => {
    modal.style.display = "none";
});

const book1 = new Book('Mistborn', 'Brandon Sanderson', '294', '2008', 'Completed');
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', '398', '1964', 'Reading');
myLibrary.push(book1, book2);
allBooks();
