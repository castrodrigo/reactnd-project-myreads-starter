import React from 'react';

const BookCover = ({ imageLinks, height, width }) => {
  let style = {
    width: width || 128,
    height: height || 193
  };
  if (imageLinks.thumbnail) {
    style.backgroundImage = `url(${imageLinks.thumbnail})`;
  }
  return <div className="book-cover" style={style} />;
};

export default BookCover;
