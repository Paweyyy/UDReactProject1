import Book from "./book";

const Bookshelf = ({title, books, moveBook, shelf}) => {

    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {
                books.map((book, idx) => {
                    return (
                        <Book
                        id={book.id}
                        key={idx}
                        imageUrl={book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                        title={book.title}
                        authors={book.authors}
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