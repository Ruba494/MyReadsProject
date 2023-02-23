import React from "react";
import * as BooksAPI from "./BooksAPI";

export const Book = ({ allBooks, bookInfo, updateBook }) => {

  const handleShelfChange = async (e, id) => {
    let newShelf = e.target.value;
    const book = await BooksAPI.get(id);
    let newBook = allBooks.findIndex((book) => book.id === id);
    if (newBook < 0) {
      allBooks.push(book);
    }
    updateBook(newShelf, id);
  };

console.log(bookInfo)
  return (
    <>
      <li key={bookInfo.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${bookInfo.imageLinks?.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                value={
                  bookInfo?.shelf ||
                  allBooks.find((book) => book.id === bookInfo.id)?.shelf ||
                  "none"
                }
                onChange={(e) => {
                handleShelfChange(e, bookInfo.id);
                }}
              >
                <option value="disabled" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{bookInfo.title}</div>
          <div className="book-authors">{bookInfo.authors}</div>
        </div>
      </li>
    </>
  );
};

export default Book;
