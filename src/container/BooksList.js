import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ bookId, title, category }) => (
  <table>
    <th>Book ID</th>
    <th>Title</th>
    <th>category</th>
    <Book bookId={bookId} title={title} category={category} />
  </table>
);

BooksList.propTypes = {
  bookId: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

BooksList.defaultProps = {
  bookId: Math.random(),
  title: '',
  category: '',
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
