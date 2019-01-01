import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const List = ({ books }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf name="Currently Reading" books={books} />
        <BookShelf name="Want to Read" books={books} />
        <BookShelf name="Read" books={books} />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default List;
