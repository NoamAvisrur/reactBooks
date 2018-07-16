import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Home from './components/Home/Home';
import './components/Home/Home.css'
import About from './components/About/About';
import './components/About/About.css'

class App extends Component {
  state = {
    books: [],
    about: '',
    showDescription: true
  }

  componentDidMount(){
    axios.get('./static/books.json') // get books list from api
      .then(res => {
        this.setState({books: res.data});
      });
    axios.get('./static/about.json') // get about text from api
      .then(res => {
        this.setState({about: res.data});
      });
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

  shouldComponentUpdate (nextProps, nextState) {
    console.log('check update');
    return this.state.books !== nextState.books || this.state.showDescription !== nextState.showDescription; //check if data changed and needs to be rendered
  }

  cleanData = (value) => { //clean string data from characters and capitalize them
    let newValue = (value).replace(/[^\w\s]/gi, '');
    return newValue.charAt(0).toUpperCase() + newValue.substr(1).toLowerCase();
  }

  componentDidUpdate () {
    console.log('updated');
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header books={this.state.books}/>
            <Route path="/home" exact render={() => {
              return (
                <Home books={this.state.books}
                      editBook={(id) => this.editBook(id)}
                      deleteBook={(id) => this.deleteBook(id)}
                      cleanData={(value) => this.cleanData(value)}
                      hideDescription={this.hideDescription}
                      showDescription={this.state.showDescription}/>
              );
            }}/>
            <Route path="/about" exact render={() => <About about={this.state.about}/>} />
            <Redirect from="/" to="/home" />*/
            <Route render={() => <h1>Not Found</h1>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
