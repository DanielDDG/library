// Initializes all the variables.

class Initializer {
    constructor() {
        this.myLibrary = [];
        this.planningCount = 0;
        this.readingCount = 1;
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
            this.readingCount++;
        });

        this.close.addEventListener('click', () => {
            this.modal.style.display = "none";
        });
    }
}

class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
}

class FormRetrieval extends Initializer {
    constructor() {
        super();
        this.title = document.getElementById('title').value;
        this.author = document.getElementById('author').value;
        this.pages = document.getElementById('pages').value;
        this.year = document.getElementById('year').value;

        const entry = new Book('The Hobbit', 'J.R.R. Tolkien', '396', '1943');
        this.myLibrary.push(entry);
        console.log(this.myLibrary);
    }
}

const retrieve = new FormRetrieval();
const listener = new Initializer();





