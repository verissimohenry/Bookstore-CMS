import React from 'react';
import './App.css';
import BooksList from './container/BooksList';
import BooksForm from './container/BooksForm';

function App() {
  return (
    <div className="App">
      <h2>BookStore</h2>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
