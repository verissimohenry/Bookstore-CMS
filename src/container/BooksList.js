import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <tr>
      <td>BookId</td>
      <td>Title</td>
      <td>Category</td>
    </tr>
    {books.map((book) => (
      <Book
        key={book.id}
        bookId={book.id}
        title={book.title}
        category={book.category}
      />
    ))}
  </table>
);

BooksList.propTypes = {
  books: [],

};

BooksList.defaultProps = {
  books: [],

};
const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps)(BooksList);
