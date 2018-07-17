import * as actionTypes from '../actions';

const initialState = {
  userName: 'dan'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        userName: action.payload
      }
  }
  return state;
}

export default reducer