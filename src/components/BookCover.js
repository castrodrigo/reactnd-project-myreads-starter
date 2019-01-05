import React from 'react';
import PropTypes from 'prop-types';

const BookCover = ({ imageLinks, height, width }) => {
  let style = { width, height };
  if (imageLinks.thumbnail) {
    style.backgroundImage = `url(${imageLinks.thumbnail})`;
  }
  return <div className="book-cover" style={style} />;
};

BookCover.propTypes = {
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string
  }),
  width: PropTypes.number,
  height: PropTypes.number
};

BookCover.defaultProps = {
  width: 128,
  height: 193
};

export default BookCover;
