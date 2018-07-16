import React from 'react';
import PropTypes from 'prop-types';

const book = (props) => {

    return <div className="book">
            <h2>{props.title}</h2>
            <img className="book-img" src={props.img} alt="books img"/>
            <span>{props.author}</span>
            <span>{props.date}</span>
            <button onClick={() => props.deleteBook(props)}>Delete</button>
            <button onClick={() => props.editBook(props)}>Edit</button>
    </div>
}

book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  deleteBook: PropTypes.func,
  editBook: PropTypes.func
}
export default book;