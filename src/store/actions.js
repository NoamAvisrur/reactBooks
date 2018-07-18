// direct store actions
export const UPDATE_USER = 'UPDATE_USER';
export const INIT_ABOUT = 'INIT_ABOUT';
export const INIT_BOOKSֹ = 'INIT_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

// saga effects actions
export const RUN_INIT_BOOKS = 'RUN_INIT_BOOKS';
export const RUN_INIT_ABOUT = 'RUN_INIT_ABOUT';
export const RUN_UPDATE_USER = 'RUN_UPDATE_USER';
export const RUN_DELETE_BOOK = 'RUN_DELETE_BOOK';
export const RUN_UPDATE_BOOK = 'RUN_UPDATE_BOOK';

// actions creators
export const updateUser = () => {
  return {
    type: RUN_UPDATE_USER
  }
}

export const initAbout = () => {
  return {
    type: RUN_INIT_ABOUT
  }
}

export const initBooks = () => {
  return {
    type: RUN_INIT_BOOKS
  }
}

export const deleteBook = (id) => {
  return {
    type: RUN_DELETE_BOOK,
    payload: id
  }
}

export const updateBook = (book) => {
  return {
    type: RUN_UPDATE_BOOK,
    payload: book
  }
}