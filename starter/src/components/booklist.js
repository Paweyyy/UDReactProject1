import { Link } from "react-router-dom";
import Bookshelf from "./bookshelf";

const BookList = ({ moveBook, books, getBooks }) => {
    return(
    <div className="app">
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <Bookshelf title="Currently Reading" books={books.filter(book => book.shelf === "currentlyReading")} moveBook={moveBook}/>
                <Bookshelf title="Read" books={books.filter(book => book.shelf === "read")} moveBook={moveBook}/>
                <Bookshelf title="Want to Read" books={books.filter(book => book.shelf === "wantToRead")} moveBook={moveBook}/>
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
        </div>
    </div>
    )
}

export default BookList;