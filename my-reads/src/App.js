import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShelfList from "./ShelfList";
import SearchBook from "./SearchBook";

function App() {
  const [books, setBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      updateBooks(res);
    };
    getBooks();
  }, []);

  const updateBookShelf = async (newShelf, id) => {
    let newBook = books.findIndex((book) => book.id === id);
    await BooksAPI.update(books[newBook], newShelf);
    books[newBook].shelf = newShelf;
    updateBooks(books);
  };

  const updateBooks = (books) => {
    setBooks(books);
    setCurrentlyReadingBooks(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setReadBooks(books.filter((book) => book.shelf === "read"));
    setWantToReadBooks(books.filter((book) => book.shelf === "wantToRead"));
  };

  return (
    <div className="app">
      <div className="list-books">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ShelfList
                currentlyReadingBooks={currentlyReadingBooks}
                readBooks={readBooks}
                wantToReadBooks={wantToReadBooks}
                updateBookShelf={updateBookShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchBook books={books} updateBookShelf={updateBookShelf} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
