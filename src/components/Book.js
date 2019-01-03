import React from 'react';
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
      <div className="book-authors">{book.author}</div>
    </div>
  </li>
);

export default Book;
