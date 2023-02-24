import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

export const ShelfList = ({currentlyReadingBooks,readBooks,wantToReadBooks,updateBookShelf,}) => {
  return (
    <>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          key={"currentlyReading"}
          books={currentlyReadingBooks}
          category="currentlyReading"
          updateBook={updateBookShelf}
        />
        <BookShelf
          key={"read"}
          books={readBooks}
          category="read"
          updateBook={updateBookShelf}
        />
        <BookShelf
          key={"wantToRead"}
          books={wantToReadBooks}
          category="wantToRead"
          updateBook={updateBookShelf}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </>
  );
};

export default ShelfList;
