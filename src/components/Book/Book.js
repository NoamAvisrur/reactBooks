import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const book = (props) => {

    return <div className="book">
            <h2>{props.title}</h2>
            <img className="book-img" src={props.img} alt="books img"/>
            <span>{props.author}</span>
            <span>{props.date}</span>
            <button onClick={props.deleteBook}>Delete</button>
            <button onClick={props.editBook}>Edit</button>
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