import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = ({ authors }) => {
  if (!authors) {
    return null;
  }
  return (
    <div className="book-authors">
      {authors
        .reduce((acum, author) => {
          acum = `${acum} | ${author}`;
          return acum;
        }, '')
        .slice(3)}
    </div>
  );
};

BookAuthors.propTypes = {
  authors: PropTypes.array.isRequired
};

BookAuthors.defaultProps = {
  authors: []
};

export default BookAuthors;
