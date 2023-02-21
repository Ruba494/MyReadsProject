import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const getBooksOfCategory=(cat)=>{
    return books.filter(book => book.shelf === cat)
  }
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
              <BookShelf books={getBooksOfCategory('currentlyReading')} category="currentlyReading" />
              <BookShelf books={getBooksOfCategory('read')} category="read" />
              <BookShelf books={getBooksOfCategory('wantToRead')} category="wantToRead" />
        </div>
      </div>
    </div>
  );
}

export default App;
