import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from './store/actions';

import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Home from './components/Home/Home';
import './components/Home/Home.css'
import About from './components/About/About';
import './components/About/About.css'

class App extends Component {

  componentDidMount(){
    axios.get('./static/books.json') // get books list from api
      .then(res => {
        this.props.setBooks(res.data);
      });
    axios.get('./static/about.json') // get about text from api
      .then(res => {
        this.props.setAbout(res.data);
      });
    this.props.setUserName('david');
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/home" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooks: (books) => dispatch({type: actionTypes.INIT_BOOKS, payload: books}),
    setAbout: (about) => dispatch({type: actionTypes.INIT_ABOUT, payload: about}),
    setUserName: (name) => dispatch({type: actionTypes.UPDATE_USER, payload: name})
  };
};

export default connect(null, mapDispatchToProps)(App);
