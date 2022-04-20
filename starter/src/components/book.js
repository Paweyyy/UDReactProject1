import {useEffect, useState} from 'react';   

const Book = ({imageUrl, title, authors, id, moveBook, shelf, isSearch}) => {
  
    const handleChange = e => {
        e.preventDefault();
        console.log(id)
        const value = e.target.value
        moveBook(id, value)
    }

    useEffect(() => {

    },[shelf])

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
                <option value="none" disabled>Move to..</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read </option>
                { !isSearch ? <option value="none">None</option> : null}
            </select>
            </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
        </div>
    </li>
    )
}

export default Book;