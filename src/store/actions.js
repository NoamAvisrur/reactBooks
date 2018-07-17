// actions
export const UPDATE_USER = 'UPDATE_USER';
export const INIT_ABOUT = 'INIT_ABOUT';
export const INIT_BOOKS = 'INIT_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

// actions creators
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export const initAbout = (about) => {
  return {
    type: INIT_ABOUT,
    payload: about
  }
}

export const initBooks = (books) => {
  return {
    type: INIT_BOOKS,
    payload: books
  }
}

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}