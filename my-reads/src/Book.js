import React from "react";

export const Book = ({bookInfo,updateBook}) => {

    const handelChange=(e,id)=>{
        let value=e.target.value
        if(value!=='none'){
            console.log('Book ',value,id)
            updateBook(value,id)
        }
       
    }
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
            <select value={bookInfo.shelf} onChange={(e)=>{handelChange(e,bookInfo.id)}}>
              <option value="none" disabled>
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
