import { combineReducers, createStore } from 'redux';
import bookReducer from './booksReducer';
import filterReducer from './filterReducer';

const combinedReducers = combineReducers({
  bookReducer,
  filterReducer,
});

export default createStore(combinedReducers);
