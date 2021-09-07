/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ bookId, title, category }) => (
  <table>
    <tr>
      <td>BookId</td>
      <td>Title</td>
      <td>Category</td>
      <Book bookId={bookId} title={title} category={category} />
    </tr>
  </table>
);

BooksList.defaultProps = {
  bookId: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
