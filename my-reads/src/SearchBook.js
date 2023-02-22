import { React, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

export const SearchBook = ({ books, updateBookShelf }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const updateQuery = (query) => {
    if(query!==''){
        BooksAPI.search(query, 100).then((res) => {
            console.log(res);
            if(res.error!=="empty query"){
                setSearchedBooks(books.concat(res));
            }
            setQuery(query.trim());
          });
    }else{
        setQuery('')
        setSearchedBooks([]);
    }
  };

  const updateHandler=(id)=>{
    
    updateBookShelf()
  }

  const showingBooks =
    query === ""
      ? searchedBooks
      : searchedBooks.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        ).sort((a, b) => a.title- b.title);

        console.log('showingBooks',showingBooks.length,'allbooks',books.length)
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(event) => {
                updateQuery(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(showingBooks || []).map((book) => (
              <Book allBooks={books} bookInfo={book} updateBook={updateBookShelf} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default SearchBook;
