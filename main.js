let myLibrary = [];
let planningCount = 0;
let readingCount = 1;
let completedCount = 0;

const add = document.getElementById('add');
const modal = document.getElementById('form');
const books = document.getElementById('books');
const close = document.getElementById('close');
const remove = document.getElementById('remove');
const readCount = document.getElementById('readCount');
const planCount = document.getElementById('planCount');
const completeCount = document.getElementById('completeCount');

class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
}

function retrieveForm() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const year = document.getElementById('year').value;

    const entry = new Book(title, author, pages, year);
    myLibrary.push(entry);

    addBook.call(entry);
}

function allBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        addBook.call(myLibrary[i]);
    }
}

function addBook() {
    let newBook = document.createElement('div');
    let closeArrow = document.createElement('span');
    let container = document.createElement('div');
    let newTitle = document.createElement('p');
    let newAuthor = document.createElement('p');
    let newPages = document.createElement('p');
    let newYear = document.createElement('p');
    let newStatus = document.createElement('select');
    let reading = document.createElement('option');
    let planning = document.createElement('option');
    let completed = document.createElement('option');

    readCount.textContent = 'Reading: ' + readingCount;
    planCount.textContent = 'Planning: ' + planningCount;
    completeCount.textContent = 'Completed: ' + completedCount;
    closeArrow.textContent = '\u00D7';
    newTitle.textContent = this.title;
    newAuthor.textContent = this.author;
    newPages.textContent = this.pages + ' Pages';
    newYear.textContent = this.year;
    newStatus.textContent = this.status;
    reading.textContent = 'Reading';
    planning.textContent = 'Planning';
    completed.textContent = 'Completed';

    closeArrow.setAttribute('data-booknumber', [i]);
    newBook.setAttribute('data-booknumber', [i]);
    let arrowNumber = closeArrow.getAttribute('data-booknumber');
    let bookNumber = closeArrow.getAttribute('data-booknumber');
    
    newBook.className = 'entry';
    closeArrow.id = 'remove';

    closeArrow.addEventListener('click', () => {
        if (arrowNumber === bookNumber) {
            newBook.remove();
        }
    });

    newStatus.addEventListener('change', function() {
        const option = this.value;

        if (option === 'Planning') {
            readingCount--;
            planningCount++;
            newBook.style.backgroundColor = 'rgb(237, 240, 74)';
        } else if (option === 'Completed') {
            readingCount--;
            completedCount++;
            newBook.style.backgroundColor = 'rgb(90, 204, 224)';
        } else {
            readingCount++;
            newBook.style.backgroundColor = 'rgb(84, 226, 115)';
        }
    });

    console.log(readingCount);
    console.log(planningCount);
    console.log(completedCount);

    books.appendChild(newBook);
    newBook.appendChild(closeArrow);
    newBook.appendChild(container);
    container.appendChild(newTitle);
    container.appendChild(newAuthor);
    container.appendChild(newPages);
    container.appendChild(newYear);
    newBook.appendChild(newStatus);

    newStatus.appendChild(reading);
    newStatus.appendChild(planning);
    newStatus.appendChild(completed);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('year').value = '';
}

modal.addEventListener('submit', (event) => {
    event.preventDefault();
    retrieveForm();
    readingCount++;
});

add.addEventListener('click', () => {
    modal.style.display = "block";
})

close.addEventListener('click', () => {
    modal.style.display = "none";
});

allBooks();
