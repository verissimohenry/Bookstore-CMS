/* eslint no-multiple-empty-lines: [0, {max: 0}] */import * as actions from './booksActions';

export const createBook = (title, category) => (
  {
    type: actions.CREATE_BOOK,
    payload: {
      title,
      category,
    },
  }
);
export const removeBook = (bookId) => (
  {
    type: actions.REMOVE_BOOK,
    payload: {
      bookId,
    },
  }
);
