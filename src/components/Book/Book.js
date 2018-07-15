import React from 'react';

const book = (props) => {

    return <div className="book">
            <h2>{props.title}</h2>
            <span>{props.author}</span>
            <span>{props.date}</span>
            <button onClick={props.deleteBook}>Delete</button>
            <button onClick={props.editBook}>Edit</button>
    </div>
}

export default book;