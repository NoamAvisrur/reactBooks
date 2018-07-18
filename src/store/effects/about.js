import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions';

export function* initAboutEffect(action) {
  try {
    const { data } = yield call(axios, './static/about.json'); // GET about from api effect and then init in store
    yield put({
      type: actionTypes.INIT_ABOUT,
      payload: data
    });
  } catch (err) {
    yield console.log('error fetching data')
  }
}