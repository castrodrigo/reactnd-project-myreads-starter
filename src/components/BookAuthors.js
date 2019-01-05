import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = ({ authors }) => (
  <div className="book-authors">
    {authors
      .reduce((acum, author) => {
        acum = `${acum} | ${author}`;
        return acum;
      }, '')
      .slice(3)}
  </div>
);

BookAuthors.propTypes = {
  authors: PropTypes.array.isRequired
};

export default BookAuthors;
