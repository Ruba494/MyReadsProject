import React from "react";
import * as BooksAPI from "./BooksAPI";

export const Book = ({allBooks,bookInfo,updateBook}) => {

    const handelChange=(e,id)=>{
        let value=e.target.value
        updateBook(value,id)
    }
    let newBook = allBooks.findIndex((book) => book.id === bookInfo.id);
    console.log(allBooks[newBook]?.shelf)
   
  return (
    <>
    <li  key={bookInfo.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${bookInfo.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={bookInfo?.shelf||'none'} onChange={(e)=>{handelChange(e,bookInfo.id)}}>
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
