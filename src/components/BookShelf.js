import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ name, books, onBookUpdate, filtered }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books
          .filter(book => filtered.includes(book.id))
          .map(book => (
            <Book key={book.id} book={book} onUpdate={onBookUpdate} />
          ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  filtered: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

BookShelf.defaultProps = {
  filtered: []
};

export default BookShelf;
