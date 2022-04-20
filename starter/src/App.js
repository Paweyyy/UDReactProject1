import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import SearchPage from "./components/searchPage";
import BookList from "./components/booklist";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BookList />}/>
      <Route path="/search" element={<SearchPage />}/>
    </Routes>
  );
}

export default App;
