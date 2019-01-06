import React from 'react';
import PropTypes from 'prop-types';

const BookOptions = ({ shelf, onUpdate }) => {
  const options = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
    { key: 'none', name: 'None' }
  ];
  const selectedShelf = shelf || 'none';
  return (
    <div className="book-shelf-changer">
      <select
        value={selectedShelf}
        onChange={event => onUpdate(event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        {options.map(option => (
          <option key={option.key} value={option.key}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

BookOptions.propTypes = {
  shelf: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
};

export default BookOptions;
