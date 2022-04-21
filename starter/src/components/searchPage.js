import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./book";

const SearchPage = ({ books, moveBook }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchBooks, setSearchBooks] = useState([])

  useEffect(() => {
    queryBooks(searchTerm)
  },[searchTerm, books])

  const queryBooks = async (searchTerm) => {
    let response = [];
    if(searchTerm !== ""){
      const res = await search(searchTerm, 5);
      if(!res.error){
        let bks = [...res]
        let ret = bks.map(bk1 => {
          let bk2 = books.filter(bk2 => bk1.id === bk2.id)[0]
          if(!bk2){
            bk1.shelf = "none"
          }
          return bk2 ? bk2 : bk1
        })
        response = ret;
      }
    }
    setSearchBooks(response)
  }

  const handleChange = e => {
    e.preventDefault(); 
    setSearchTerm(e.target.value)
  }

  return(
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              searchBooks.map((book, idx) => {
                return(<Book 
                  title={book.title}
                  id={book.id}
                  key={idx}
                  authors={book.authors} 
                  imageUrl={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                  shelf={book.shelf}
                  isSearch={true}
                  moveBook={moveBook}
                />)
                })
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SearchPage;