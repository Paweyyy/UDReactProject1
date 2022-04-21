import { useEffect } from "react";

const Book = ({imageUrl, title, authors, id, moveBook, shelf, isSearch}) => {
  
    const handleChange = e => {
        e.preventDefault();
        console.log(id)
        const value = e.target.value
        moveBook(id, value)
    }

    useEffect(() => {

    }, [shelf])

    return(
        <li key={id}>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${imageUrl})`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <select onChange={handleChange} value={shelf}>
                    <option value="nn" disabled>Move to..</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read </option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            {
                authors ? authors.map((author, idx) => <div key={idx}className="book-authors">{author}</div>) : null
            }
            </div>
        </li>
    )
}

export default Book;