import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const List = ({ books, shelves }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <BookShelf
            key={shelf.type}
            shelf={shelf.type}
            name={shelf.name}
            books={books}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

List.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
};

export default List;
