import React from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookOptions from './BookOptions';
import BookAuthors from './BookAuthors';

const Book = ({ book, onUpdate }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookOptions
          shelf={book.shelf}
          onUpdate={shelf => onUpdate(book, shelf)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <BookAuthors authors={book.authors} />
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  }).isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Book;
