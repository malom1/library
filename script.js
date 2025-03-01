const myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(name, author, pages){
    for (let i=1; i<10; i++){
        i = new Book(name, author, pages);
        myLibrary.push(i);
    }
}



addBookToLibrary("Harry Potter", "Mohammad Alom", 598);
addBookToLibrary("Diary of the Wimpy Kid", "Jeff Kinney", 153);
addBookToLibrary("Captain Underpants", "Dev Pilkey", 86);
console.log(myLibrary);
