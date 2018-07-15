import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Home from './components/Home/Home';
import './components/Home/Home.css'

class App extends Component {
  state = {
    books: [
      {id: 1, title: 'fear and loathing in las vegas', author: 'Hunter Thompson', date: '10.10.1976'},
      {id: 2, title: 'how to kill a mocking bird', author: 'Harper Lee', date: '10.11.66'}
    ],
    showDescription: true
  }

  deleteBook = (id) => {
    const index = this.state.books.findIndex(book => book.id === id);
    if(index !== -1){
      const books = [...this.state.books];
      books.splice(index, 1);
      this.setState({books: books});
    }
  }

  editBook = (id) => {
    const index = this.state.books.findIndex(book => book.id === id);
    if(index !== -1){
      const books = [...this.state.books];
      books[index] = {id: 2, title: 'it', author: 'Harper Lee', date: '10.11.66'}
      this.setState({books: books});
    }
  }

  hideDescription = () => {
    const descriptionShow = !this.state.showDescription;
    this.setState({showDescription: descriptionShow});
  }

  render() {
    return (
      <div className="App">
        <Header books={this.state.books}/>
        <Home books={this.state.books}
              editBook={(id) => this.editBook(id)}
              deleteBook={(id) => this.deleteBook(id)}
              hideDescription={this.hideDescription}
              showDescription={this.state.showDescription}/>
      </div>
    );
  }
}

export default App;
