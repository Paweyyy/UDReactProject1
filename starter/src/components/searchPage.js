import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./book";
import { update } from "../BooksAPI";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [books, setBooks] = useState([])

  useEffect(() => {
    const searchBook = async () => {
      const res = await search(searchTerm, 5);
      if(!res.error){
        console.log(res)
        setBooks(res)
      }
    }
    if(searchTerm === ""){
      setBooks([])
    }else{
      searchBook()
    }
  },[searchTerm])

  const handleChange = e => {
    e.preventDefault(); 
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  const moveBook = async (key, value) => {
    console.log(key, value)
    const book = { id: key }
    const res  = await update(book, value)
    var booksCpy = [...books]
    const ret = booksCpy.map(book => {
        if(book.id === key){
            book.shelf = value
        }
        return book
    })
    setBooks(ret)
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
              books.map(book => {
                return(<Book 
                  title={book.title}
                  id={book.id}
                  authors={book.authors} 
                  imageUrl={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                  shelf={book.shelf ? book.shelf : "none"}
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