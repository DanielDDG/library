function Book(name, author, pages, year) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
};

const add = document.getElementById('add');
const modal = document.getElementById('form');

add.addEventListener('click', () => {
    modal.style.display = "block";
})

