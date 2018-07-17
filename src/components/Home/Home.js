import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionsTypes from '../../store/actions';

import Book from '../Book/Book';
import '../Book/Book.css';
import HomeDescription from '../HomeDescription/HomeDescription';
import DeleteModal from '../modals/DeleteModal'
import EditModal from '../modals/EditModal'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: true,
      showDeleteModal: false,
      showEditModal: false,
      selectedBook: {}
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
    this.props.deleteSelectedBook(this.state.selectedBook.id);
    this.closeModal();
  }

  editThisBook = (newTitle, newAuthor) => {
    if(newTitle.length > 0){
      const newBook = this.state.selectedBook;
      newBook.title = newTitle;
      this.setState({selectedBook: newBook});
    }
    if(newAuthor.length > 0){
      const newBook = this.state.selectedBook;
      newBook.author = newAuthor;
      this.setState({selectedBook: newBook});
    }
    this.props.editSelectedBook(this.state.selectedBook);
    this.closeModal();
  }

  hideDescription = () => {
    const descriptionShow = !this.state.showDescription;
    this.setState({showDescription: descriptionShow});
  }

  cleanData = (value) => { //clean string data from characters and capitalize them
    let newValue = (value).replace(/[^\w\s]/gi, '');
    return newValue.charAt(0).toUpperCase() + newValue.substr(1).toLowerCase();
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="books-wrapper">
          {this.props.books.map((book, i) => {
            return <Book key={i}
                         id = {book.id}
                         title={this.cleanData(book.title)}
                         author={this.cleanData(book.author)}
                         img={book.img}
                         date={book.date}
                         editBook={() => this.openEditModal(book)}
                         deleteBook={(book) => this.openDeleteModal(book)}/>
          })}
        </div>
        {this.state.showDescription ?
          <HomeDescription>this is a very long description about this book store app</HomeDescription> : null}
        <button onClick={this.hideDescription}>{this.state.showDescription ? 'Hide' : 'Show'}</button>
        <DeleteModal show={this.state.showDeleteModal}
                     handleClose={() => this.closeModal()}
                     deleteBook={() => this.deleteThisBook()}/>
        <EditModal show={this.state.showEditModal}
                   selectedBook={this.state.selectedBook}
                   handleClose={() => this.closeModal()}
                   editBook={(newTitle, newAuthor) => this.editThisBook(newTitle, newAuthor)}/>
      </div>
    );
  }
}

Home.propTypes = {
  books: PropTypes.array,
  deleteSelectedBook: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    deleteSelectedBook: (id) => dispatch({type: actionsTypes.DELETE_BOOK, payload: id}),
    editSelectedBook: (book) => dispatch({type: actionsTypes.UPDATE_BOOK, payload: book})
  };
};

const mapStateToProps = state => {
  return {
    books: state.books.books
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);