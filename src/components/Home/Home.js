import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import '../Book/Book.css';
import HomeDescription from '../HomeDescription/HomeDescription';
import DeleteModal from '../modals/DeleteModal'
import EditModal from '../modals/EditModal'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showEditModal: false,
      selectedBook: null
    }
  }

  openDeleteModal = (book) => {
    this.setState({selectedBook: book, showDeleteModal: true});
  }

  openEditModal = (book) => {
    this.setState({selectedBook: book, showEditModal: true});
  }

  closeModal = () => {
    this.setState({showDeleteModal: false, showEditModal: false, selectedBook: null});
  }

  deleteThisBook = () => {
    this.props.deleteBook(this.state.selectedBook.id);
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
                         editBook={() => this.openEditModal(book)}
                         deleteBook={(book) => this.openDeleteModal(book)}/>
          })}
        </div>
        {this.props.showDescription ?
          <HomeDescription>this is a very long description about this book store app</HomeDescription> : null}
        <button onClick={this.props.hideDescription}>{this.props.showDescription ? 'Hide' : 'Show'}</button>
        <DeleteModal show={this.state.showDeleteModal}
                     handleClose={() => this.closeModal()}
                     deleteBook={() => this.deleteThisBook()}/>
        <EditModal show={this.state.showEditModal}
                   selectedBook={this.state.selectedBook}
                   handleClose={() => this.closeModal()}
                   deleteBook={() => this.deleteThisBook()}/>
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