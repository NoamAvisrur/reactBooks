import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from  'redux';
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
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
