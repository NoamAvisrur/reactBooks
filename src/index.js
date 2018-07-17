import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from  'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BooksReducer from './store/reducers/books';
import UserReducer from './store/reducers/user';
import AboutReducer from './store/reducers/about';

const rootReducer = combineReducers({
  books: BooksReducer,
  user: UserReducer,
  about: AboutReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log('middleware', action);
      const result = next(action);
      console.log('middleware', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //chrome redux dev-tools support

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
