import React from 'react';
import PropTypes from 'prop-types';
import BookCover from './BookCover';
import BookOptions from './BookOptions';

const Book = ({ book }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookOptions shelf={book.shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors
          .reduce((authors, author) => {
            authors = `${authors} | ${author}`;
            return authors;
          }, '')
          .slice(3)}
      </div>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  }).isRequired
};

export default Book;
