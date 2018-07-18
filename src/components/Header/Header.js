import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import logo from '../../assets/logo.svg';
import AddModal from '../modals/AddModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false,
      newBook: {}
    }
  }

  openAddModal = () => {
    this.setState({showAddModal: true});
    console.log(this.state.showAddModal);
  }

  closeModal = () => {
    this.setState({showAddModal: false, newBook: null});
  }

  addThisBook = (newBook) => {
    this.props.addNewBook(newBook);
    this.closeModal();
  }

  render() {
    return (
      <header className="App-header">
        <div className="App-header-details">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">My React Book-Store</h1>
          <NavLink className="header-button"
                   to="/home"
                   activeClassName="active-route">Home</NavLink>
          <NavLink className="header-button"
                   to="/about"
                   activeClassName="active-route">About</NavLink>
        </div>
        <div className="App-header-details">
          <span>user: {this.props.userName}</span>
          <button className="header-button" onClick={this.openAddModal}>add a book +</button>
          <div className="books-amount">{this.props.books.length} Books</div>
        </div>
        <AddModal show={this.state.showAddModal}
                  selectedBook={this.state.selectedBook}
                  handleClose={() => this.closeModal()}
                  addBook={(newBook) => this.addThisBook(newBook)}/>
      </header>
    )
  }
}


Header.propTypes = {
  books: PropTypes.array,
  userName: PropTypes.string
}

const mapDispatchToProps = dispatch => {
  return {
    addNewBook: (newBook) => dispatch(actionCreators.addBook(newBook)),
  };
};

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    books: state.books.books
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);