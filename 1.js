class BookList {
  constructor() {
    this.books = [];
    this.favoriteBook = "";
  }

  addBook(title, author) {
    this.books.push({ title, author });
    console.log(`Kitob qo‘shildi: "${title}", muallif: ${author}`);
  }

  setFavoriteBook(title) {
    let found = this.books.find(book => book.title === title);
    if (found) {
      this.favoriteBook = title;
      console.log(`Sevimli kitob yangilandi: "${title}"`);
    } else {
      console.log(`"${title}" nomli kitob topilmadi`);
    }
  }

  getBooksList() {
    console.log("Kitoblar ro‘yxati:");
    this.books.forEach(book => {
      console.log(`"${book.title}", muallif: ${book.author}`);
    });
  }

  getFavoriteBook() {
    if (this.favoriteBook) {
      console.log(`Sevimli kitobingiz: "${this.favoriteBook}"`);
    } else {
      console.log("Sevimli kitob hali tanlanmagan");
    }
  }
}

let myBooks = new BookList();

myBooks.addBook("O‘tkan kunlar", "Abdulla Qodiriy");
myBooks.addBook("Mehrobdan chayon", "Abdulla Qodiriy");
myBooks.addBook("Ufq", "Said Ahmad");

myBooks.getBooksList();

myBooks.setFavoriteBook("O‘tkan kunlar");
myBooks.getFavoriteBook();
