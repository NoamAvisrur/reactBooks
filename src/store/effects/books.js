import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../actions';

export function* initBooksEffect() {
  try {
    const { data } = yield call(axios, './static/books.json'); // GET books from api effect and then init in store
    yield put({
      type: actionTypes.INIT_BOOKSֹ,
      payload: data
    });
  } catch (err) {
    yield console.log('error fetching data')
  }
}

export function* deleteBookEffect(action) { //DELETE a book effect and then invoke direct action to store
  yield console.log(action.payload);
  yield put({
    type: actionTypes.DELETE_BOOK,
    payload: action.payload
  });
}

export function* updateBookEffect(action) { //EDIT a book effect and then invoke direct action to store
  yield console.log(action.payload);
  yield put({
    type: actionTypes.UPDATE_BOOK,
    payload: action.payload
  });
}
