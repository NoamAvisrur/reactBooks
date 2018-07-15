import React from 'react';
import Book from '../Book/Book';
import '../Book/Book.css'
import HomeDescription from '../HomeDescription/HomeDescription'

const home = (props) => {
    return <div className="home-wrapper">
           <div className="books-wrapper">
           {props.books.map((book, i) => {
               return <Book key={book.id}
                            title={book.title}
                            author={book.author}
                            date={book.date}
                            editBook={() => props.editBook(book.id)}
                            deleteBook={() => props.deleteBook(book.id)}/>
           })}
          </div>
        {props.showDescription ? <HomeDescription>home description</HomeDescription> : null}
        <button onClick={props.hideDescription}>{props.showDescription ? 'Hide' : 'Show'}</button>
    </div>
}

export default home;