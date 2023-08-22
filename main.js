// Initializes all the variables.

class Initializer {
    constructor() {
        this.myLibrary = [];
        this.planningCount = 0;
        this.readingCount = 0;
        this.completedCount = 0;
        this.log = document.getElementById('log');
        this.readCount = document.getElementById('readCount');
        this.planCount = document.getElementById('planCount');
        this.completeCount = document.getElementById('completeCount');
        this.add = document.getElementById('add');
        this.modal = document.getElementById('form');
        this.books = document.getElementById('books');
        this.close = document.getElementById('close');
        this.remove = document.getElementById('remove');

        this.add.addEventListener('click', () => {
            this.modal.style.display = "block";
        })

        this.modal.addEventListener('submit', (event) => {
            event.preventDefault();
            new FormRetrieval(this).pushToArray();
            new BookUICreation(this).addBook();
            this.readingCount++;
        });

        this.close.addEventListener('click', () => {
            this.modal.style.display = "none";
        });
    }
}

// Creates a book.

class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
}

// Collects the user inputted values and creates a book.

class FormRetrieval {
    constructor(instance) {
        this.title = document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.year = document.getElementById('year').value;
        this.myLibrary = instance.myLibrary;
    }

    pushToArray() {
        const entry = new Book(this.title, this.author, this.pages, this.year);
        this.myLibrary.push(entry);
        console.log(this.myLibrary);
    }
}

// Creates the UI for the book.

class BookUICreation {
    constructor(instance) {
        this.newBook = document.createElement('div');
        this.newBook.className = 'entry';
        this.closeArrow = document.createElement('span');
        this.container = document.createElement('div');
        this.newTitle = document.createElement('p');
        this.newAuthor = document.createElement('p');
        this.newPages = document.createElement('p');
        this.newYear = document.createElement('p');
        this.newStatus = document.createElement('select');
        this.reading = document.createElement('option');
        this.planning = document.createElement('option');
        this.completed = document.createElement('option');
        this.readCount = instance.readCount;
        this.readingCount = instance.readingCount;
        this.planCount = instance.planCount;
        this.planningCount = instance.planningCount;
        this.completeCount = instance.completeCount;
        this.completedCount = instance.completedCount;
        this.books = instance.books;
        this.instance = instance;
    }

    addBook() {
        this.closeArrow.textContent = '\u00D7';
        this.newTitle.textContent = document.getElementById('title').value;
        this.newAuthor.textContent = document.getElementById('author').value;
        this.newPages.textContent = document.getElementById('pages').value + ' Pages';
        this.newYear.textContent = document.getElementById('year').value;
        this.reading.textContent = 'Reading';
        this.planning.textContent = 'Planning';
        this.completed.textContent = 'Completed';

        this.books.appendChild(this.newBook);
        this.newBook.appendChild(this.closeArrow);
        this.newBook.appendChild(this.container);
        this.container.appendChild(this.newTitle);
        this.container.appendChild(this.newAuthor);
        this.container.appendChild(this.newPages);
        this.container.appendChild(this.newYear);
        this.newBook.appendChild(this.newStatus);
    
        this.newStatus.appendChild(this.reading);
        this.newStatus.appendChild(this.planning);
        this.newStatus.appendChild(this.completed);


        this.newStatus.addEventListener('change', () => {

            if (this.newStatus.value === 'Planning') {
                this.instance.readingCount--;
                this.instance.planningCount++;
                this.newBook.style.backgroundColor = 'rgb(237, 240, 74)';
            } else if (this.newStatus.value === 'Completed') {
                this.instance.readingCount--;
                this.instance.completedCount++;
                this.newBook.style.backgroundColor = 'rgb(90, 204, 224)';
            } else {
                this.instance.readingCount++;
                this.newBook.style.backgroundColor = 'rgb(84, 226, 115)';
            }

            this.instance.readCount.textContent = 'Reading: ' + this.instance.readingCount;
            this.instance.planCount.textContent = 'Planning: ' + this.instance.planningCount;
            this.instance.completeCount.textContent = 'Completed: ' + this.instance.completedCount;

        });

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('year').value = '';
    }
}

// Pushes all the books from the array into the UI.

class AddBookToUI {
    constructor(instance) {
        for (let i = 0; i < instance.myLibrary.length; i++) {
            new BookUICreation(instance.myLibrary[i]).addBook();
        }
    }
}

const listener = new Initializer();
const bookInstance = new AddBookToUI(listener);






