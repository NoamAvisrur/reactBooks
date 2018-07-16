import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';

const header = (props) => {
  return <header className="App-header">
    <div className="App-header-details">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">My React Book-Store</h1>
      <NavLink className="header-button"
               to="/home"
               activeClassName="active-route">Home</NavLink>
      <NavLink className="header-button"
               to="/about"
               activeClassName="active-route">About</NavLink>
    </div>
    <div className="App-header-details">
      <button className="header-button">add a book +</button>
      <div className="books-amount">{props.books.length} Books</div>
    </div>
  </header>
}

header.propTypes = {
  books: PropTypes.array
}

export default header;