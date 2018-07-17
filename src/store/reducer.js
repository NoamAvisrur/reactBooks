import * as actionTypes from './actions';

const initialState = {
  books: [],
  about: 0,
  userName: 'dan'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        userName: action.payload
      }
    case actionTypes.INIT_ABOUT:
      return{
        ...state,
        about: action.payload
      }
    case actionTypes.INIT_BOOKS:
      return {
        ...state,
        books: action.payload
      }
    case actionTypes.DELETE_BOOK:
      const newArr = state.books.filter(book => book.id !== action.payload);
      return{
        ...state,
        books: newArr
      }
  }
  return state;
}

export default reducer