import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions';

export function* updateUserEffect() {
  yield console.log('add user');
  yield put({
    type: actionTypes.UPDATE_USER,
    payload: 'Micky'
  });
}