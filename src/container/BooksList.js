import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import store from '../reducers';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, filter }) => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };
  const hanldeFilterChange = (e) => {
    store.dispatch(changeFilter(e.target.value));
  };
  let filteredBook = '';
  if (filter === 'All') {
    filteredBook = books;
  } else {
    filteredBook = books.filter((book) => book.category === filter);
  }
  return (
    <div>
      <CategoryFilter handleChange={hanldeFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>

          </tr>
        </thead>

        <Book books={filteredBook} remove={handleRemoveBook} />

      </table>
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,

};
BookList.defaultProps = {
  books: [],
  filter: '',

};
const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter: state.filterReducer,
});
export default connect(mapStateToProps)(BookList);
