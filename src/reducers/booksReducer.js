import { CREATE_BOOK, REMOVE_BOOK } from '../actions/booksActions';

const initialState = {
  books: [{
    id: Math.floor(Math.random() * 30),
    title: 'Dertogada',
    category: 'Fiction',
  },
  {
    id: Math.floor(Math.random() * 30),
    title: 'React-redux',
    category: 'Learning',

  },

  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export default bookReducer;
