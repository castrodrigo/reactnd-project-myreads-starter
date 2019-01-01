import React from 'react';

const BookOptions = ({ shelf }) => {
  const options = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
    { key: 'none', name: 'None' }
  ];
  return (
    <div className="book-shelf-changer">
      <select value={shelf}>
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

export default BookOptions;
