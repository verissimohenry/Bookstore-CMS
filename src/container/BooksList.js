/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <th>Book ID</th>
    <th>Title</th>
    <th>category</th>
    {books.map((books) => (
      <Book
        key={books.bookId}
        bookId={books.bookId}
        title={books.title}
        category={books.category}
      />
    ))}
  </table>
);

const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps, null)(BooksList);
