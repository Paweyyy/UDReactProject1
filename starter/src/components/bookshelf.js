import Book from "./book";
import { useEffect, useState } from "react";

const Bookshelf = ({title, books, moveBook, shelf}) => {
    useEffect(() => {

    },[books])

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.map((book, idx) => {
                    return (
                        <Book
                        key={idx}
                        id={book.id}
                        imageUrl={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                        title={book.title}
                        authors={books.authors}
                        moveBook={moveBook}
                        shelf={book.shelf ? book.shelf : "none"}
                        />
                    )
                })
            }
            </ol>
        </div>
        </div>
    )
}

export default Bookshelf;