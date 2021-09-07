import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      <input placeholder="Book Title" />
      <select id="category" name="category">
        <option value="" selected>
          Choose category
        </option>
        {
          categories.map((e) => <option key={Math.random()} value={e}>{e}</option>)
        }
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
