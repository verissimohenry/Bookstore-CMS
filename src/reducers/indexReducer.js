import { combineReducers, createStore } from 'redux';
import booksReducer from './booksReducer';

const combinedReducers = combineReducers({
  books: booksReducer,
});

const store = createStore(combinedReducers);

export default store;
