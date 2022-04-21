import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchPage";
import BookList from "./components/booklist";
import { useState, useEffect } from "react";
import { getAll, update, search } from './BooksAPI';

function App() {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const res = await getAll();
    setBooks(res)
  }

  useEffect(() => {
    getBooks();
  }, [])    

  const moveBook = async (key, value) => {
    console.log(key, value)
    const book = { id: key }
    await update(book, value)
    await getBooks();
  }

  return (
    <Routes>
      <Route exact path="/" element={<BookList books={books} getBooks={getBooks} moveBook={moveBook}/>}/>
      <Route path="/search" element={<SearchPage books={books} moveBook={moveBook} />}/>
    </Routes>
  );
}

export default App;
