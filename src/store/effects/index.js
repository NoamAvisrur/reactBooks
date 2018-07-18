import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions';
import * as booksEffects from './books';
import * as userEffects from './user';
import * as aboutEffects from './about';

export function* watchAuth() { // watch for action and invoke its effect
  yield takeEvery(actionTypes.RUN_INIT_BOOKS, booksEffects.initBooksEffect);
  yield takeEvery(actionTypes.RUN_INIT_ABOUT, aboutEffects.initAboutEffect);
  yield takeEvery(actionTypes.RUN_UPDATE_USER, userEffects.updateUserEffect)
  yield takeEvery(actionTypes.RUN_DELETE_BOOK, booksEffects.deleteBookEffect);
  yield takeEvery(actionTypes.RUN_UPDATE_BOOK, booksEffects.updateBookEffect);
}