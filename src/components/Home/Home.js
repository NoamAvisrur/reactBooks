import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import '../Book/Book.css';
import HomeDescription from '../HomeDescription/HomeDescription';
import Modal from '../modals/modal'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBookId: null
    }
  }

  openModal = (bookId) => {
    this.setState({showModal: true, selectedBookId: bookId});
  }

  closeModal = () => {
    this.setState({showModal: false, selectedBookId: null});
  }

  deleteThisBook = () => {
    this.props.deleteBook(this.state.selectedBookId);
    this.closeModal();
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="books-wrapper">
          {this.props.books.map((book, i) => {
            return <Book key={book.id}
                         id = {book.id}
                         title={this.props.cleanData(book.title)}
                         author={this.props.cleanData(book.author)}
                         img={book.img}
                         date={book.date}
                         editBook={() => this.openModal(book.id)}
                         deleteBook={(bookId) => this.openModal(bookId)}/>
          })}
        </div>
        {this.props.showDescription ?
          <HomeDescription>this is a very long description about this book store app</HomeDescription> : null}
        <button onClick={this.props.hideDescription}>{this.props.showDescription ? 'Hide' : 'Show'}</button>
        <Modal show={this.state.showModal} handleClose={() => this.closeModal()} deleteBook={() => this.deleteThisBook()}/>
      </div>
    );
  }
}

Home.propTypes = {
  books: PropTypes.array,
  showDescription: PropTypes.bool,
  cleanData: PropTypes.func,
  deleteBook: PropTypes.func,
  editBook: PropTypes.func
}

export default Home;