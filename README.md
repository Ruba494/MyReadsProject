# MyReads Project
This is the final assessment project for Udacity's React Fundamentals course. it's a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. Also search and add new books to your bookshelfs

## Install and start
- navigate to my-reads folder `cd my-reads`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## files discription
```bash
└──my-reads # project main folder
    ├── package.json # npm package manager file.
    ├── public
    │   ├── favicon.ico # React Icon
    │   └── index.html 
    └── src
        ├── App.css # Styles for this app. 
        ├── App.js # The root this app.
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
        ├── Components # main components
        │   ├── Book.js # Book component, shows book info and update shelf
        │   ├── BoookShelf.js # Book shelf component, show books based on shelf category
        │   ├── SearchBook.js # Search page component, allows to search for books based on book title 
        │   └── ShelfList.js # Shelf list component, lists the read, currently reading, and want to read shelfs
        ├── icons # icons used in this app
        │   ├── add.svg
        │   ├── arrow-back.svg
        │   └── arrow-drop-down.svg
        ├── index.css # Global styles
        └── index.js # It is used for DOM rendering only.
```