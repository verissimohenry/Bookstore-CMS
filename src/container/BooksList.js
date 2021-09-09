import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = (props) => {
  const { books, removeBook } = props;
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <table>
      <thead>
        <tr>
          <td>BookId</td>
          <td>Title</td>
          <td>Category</td>
          <td>Remove</td>
        </tr>
      </thead>
      {
       books.map((book) => (
         <Book
           book={book}
           key={book.bookId}
           title={book.title}
           category={book.category}
           handleRemoveBook={(bookId) => handleRemoveBook(bookId)}
         />
       ))
}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
