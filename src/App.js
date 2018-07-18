import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionCreators from './store/actions';

import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Home from './components/Home/Home';
import './components/Home/Home.css'
import About from './components/About/About';
import './components/About/About.css'

class App extends Component {

  componentDidMount(){
    this.props.setAbout();
    this.props.setBooks();
    this.props.setUserName();
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
    setBooks: () => dispatch(actionCreators.initBooks()),
    setAbout: () => dispatch(actionCreators.initAbout()),
    setUserName: () => dispatch(actionCreators.updateUser())
  };
};

export default connect(null, mapDispatchToProps)(App);
