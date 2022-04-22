# Project Description

This project is Book Tracking Web-App developed using React. Within the App a user can manage books in different shelves. The available shelves are "read", "want to read" and "currently Reading".
Depending on the reading status the user can put a specific book in to a shelf.

On the serach Page a user can search for new books he would like to read and add to a shelve.

The Application connects to an API Provided by Udacity.

## Start the application

Start the Application:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Folder Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Compontents
    │   ├── book.js # A single book component
    │   ├── booklist.js # The Book Page that contains the bookshelfs with books
    │   ├── bookshelf.js # One shelf that contains certain books
    │   ├── searchPage.js # The Search Page that contains specific book
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```