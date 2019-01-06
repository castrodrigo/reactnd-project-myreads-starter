import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const SearchResults = ({ filtered, searched, onBookUpdate }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {searched.map(book => {
        const bookEnhanced = filtered[book.id]
          ? { ...book, shelf: filtered[book.id] }
          : book;
        return (
          <Book key={book.id} book={bookEnhanced} onUpdate={onBookUpdate} />
        );
      })}
    </ol>
  </div>
);

SearchResults.propTypes = {
  searched: PropTypes.array,
  filtered: PropTypes.object.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  searched: []
};

export default SearchResults;
