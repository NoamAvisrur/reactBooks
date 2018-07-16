import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import '../Book/Book.css'
import HomeDescription from '../HomeDescription/HomeDescription'

const home = (props) => {
    return <div className="home-wrapper">
           <div className="books-wrapper">
           {props.books.map((book, i) => {
               return <Book key={book.id}
                            title={props.cleanData(book.title)}
                            author={props.cleanData(book.author)}
                            img={book.img}
                            date={book.date}
                            editBook={() => props.editBook(book.id)}
                            deleteBook={() => props.deleteBook(book.id)}/>
           })}
          </div>
        {props.showDescription ? <HomeDescription>this is a very long description about this book store app</HomeDescription> : null}
        <button onClick={props.hideDescription}>{props.showDescription ? 'Hide' : 'Show'}</button>
    </div>
}

home.propTypes = {
  books: PropTypes.array,
  showDescription: PropTypes.bool,
  cleanData: PropTypes.func,
  deleteBook: PropTypes.func,
  editBook: PropTypes.func
}

export default home;