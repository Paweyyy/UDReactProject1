import { Link } from "react-router-dom";
import Bookshelf from "./bookshelf";
import { useState, useEffect } from "react";
import { get, getAll, update } from '../BooksAPI';

const BookList = () => {
    const [currentlyReading, setCurrentlyReading] = useState([])
    const [read, setRead] = useState([])
    const [wantToRead, setWantToRead] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const res = await getAll();
            setCurrentlyReading(res.filter(book => book.shelf === "currentlyReading"))
            setRead(res.filter(book => book.shelf === "read"))
            setWantToRead(res.filter(book => book.shelf === "wantToRead"))
        }
        getBooks();
    }, [])

    const moveBook = async (key, value) => {
        console.log(key, value)
        const book = { id: key }
        const res  = await update(book, value)
        console.log(res)
        var booksCpy = [...currentlyReading,...read, ...wantToRead]
        const ret = booksCpy.map(book => {
            if(book.id === key){
                book.shelf = value
            }
            return book
        })
        setCurrentlyReading(ret.filter(book => book.shelf === "currentlyReading"))
        setRead(ret.filter(book => book.shelf === "read"))
        setWantToRead(ret.filter(book => book.shelf === "wantToRead"))
    }

    return(
    <div className="app">
        <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
            <Bookshelf title="Currently Reading" books={currentlyReading} moveBook={moveBook}/>
            <Bookshelf title="Read" shelf="read" books={read} moveBook={moveBook}/>
            <Bookshelf title="Want to Read" books={wantToRead} moveBook={moveBook}/>
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