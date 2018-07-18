import * as actionTypes from '../actions';

const initialState = {
  books: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_BOOKSֹ:
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
    case actionTypes.UPDATE_BOOK:
      const i = state.books.findIndex(book => book.id === action.payload);
      const Arr = [...state.books];
      Arr[i] = {...action.payload}
      return{
        ...state,
        books: Arr
      }
    case actionTypes.ADD_BOOK:
      return{
        ...state,
        books: state.books.concat({...action.payload})
      }
  }
  return state;
}

export default reducer