import React from 'react';
import Book from './Book';

const BookShelf = ({ name, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
