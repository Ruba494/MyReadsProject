import React from "react";
import Book from "./Book";

export const BookShelf = ({ books, category }) => {
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
                <Book bookInfo={book} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default BookShelf;
