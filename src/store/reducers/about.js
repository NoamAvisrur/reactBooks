import * as actionTypes from '../actions';

const initialState = {
  about: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_ABOUT:
      return{
        ...state,
        about: action.payload
      }
  }
  return state;
}

export default reducer