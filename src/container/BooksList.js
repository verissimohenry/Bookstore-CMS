import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <td>
      <tr>
        <td>BookId</td>
        <td>Title</td>
        <td>Category</td>
      </tr>
    </td>
    { books.map((book) => <tr><td><Book bookId={book.id} title={book.title} category={book.category} /></td></tr>)}
  </table>
);

BooksList.defaultProps = {
  bookId: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
