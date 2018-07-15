import React from 'react';
import logo from '../../assets/logo.svg';

const header = (props) => {
  return <header className="App-header">
    <div className="App-header-details">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">My React Book-Store</h1>
      <button className="header-button">Home</button>
      <button className="header-button">About</button>
    </div>
    <div className="App-header-details">
      <button className="header-button">add a book +</button>
      <div className="books-amount">{props.books.length} Books</div>
    </div>
  </header>
}

export default header;