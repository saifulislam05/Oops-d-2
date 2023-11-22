class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }

  borrow() {
    if (this.available) {
      this.available = false;
      return true;
    } else {
      console.log(`${this.title} is not available for borrowing.`);
      return false;
    }
  }

  returnBook() {
    this.available = true;
    console.log(`${this.title} has been returned.`);
  }
}

class LibraryMember {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.borrow()) {
      this.borrowedBooks.push(book);
      console.log(`${this.name} has borrowed ${book.title}.`);
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks[index].returnBook();
      this.borrowedBooks.splice(index, 1);
      console.log(`${this.name} has returned ${book.title}.`);
    } else {
      console.log(
        `${this.name} did not borrow ${book.title} from the library.`
      );
    }
  }

  displayBorrowedBooks() {
    console.log(
      `${this.name}'s borrowed books:`,
      this.borrowedBooks.map((book) => book.title)
    );
  }
}

class LibraryStaff {


  addBook(library, book) {
    library.books.push(book);
    console.log(
      `${book.title} by ${book.author} has been added to the library.`
    );
  }

  removeDamagedBook(library, book) {
    const index = library.books.indexOf(book);
    if (index !== -1) {
      library.books.splice(index, 1);
      console.log(
        `${book.title} has been removed from the library due to damage.`
      );
    } else {
      console.log(`${book.title} is not in the library.`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }
}


const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

const member1 = new LibraryMember("Saiful islam", "abc@example.com");
const member2 = new LibraryMember("Aminul islam", "efg@example.com");

const staff = new LibraryStaff();

staff.addBook(library, book1);
staff.addBook(library, book2);

member1.borrowBook(book1);
member1.displayBorrowedBooks();

member2.borrowBook(book2);
member2.displayBorrowedBooks();

member1.returnBook(book1);
member1.displayBorrowedBooks();

staff.removeDamagedBook(library, book2);

console.log(library.books);
