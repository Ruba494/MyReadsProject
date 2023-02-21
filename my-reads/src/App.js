import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      updateBooks(res)
    };
    getBooks();
  }, []);


  const updateBookShelf = (newShelf, id) => {
    let newBook = books.findIndex((book) => book.id === id);
    BooksAPI.update(newBook, newShelf).then(() => {
      books[newBook].shelf = newShelf;
      updateBooks(books)
    });
  
  };


  const updateBooks=(books)=>{
    setBooks(books);
    setCurrentlyReadingBooks(books.filter((book) => book.shelf === 'currentlyReading'))
    setReadBooks(books.filter((book) => book.shelf === 'read'))
    setWantToReadBooks(books.filter((book) => book.shelf === 'wantToRead'))
  }
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={currentlyReadingBooks}
            category="currentlyReading"
            updateBook={updateBookShelf}
          />
          <BookShelf
            books={readBooks}
            category="read"
            updateBook={updateBookShelf}
          />
          <BookShelf
            books={wantToReadBooks}
            category="wantToRead"
            updateBook={updateBookShelf}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
