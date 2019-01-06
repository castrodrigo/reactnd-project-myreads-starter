import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../api/BooksAPI';
import Book from './Book';
import { debounce } from '../utils/debounce';

class Search extends React.Component {
  state = {
    searchedBooks: [],
    query: ''
  };

  onSearchHandler = debounce(query => {
    this.setState({ query });
    if (query.length > 0) {
      return search(query).then(books => {
        this.setState({ searchedBooks: books.items ? [] : books });
      });
    }
    this.setState({ searchedBooks: [], query });
  }, 10);

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.onSearchHandler(e.target.value)}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.error && <p>{this.state.error}</p>}
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                onUpdate={this.props.onBookUpdate}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onBookUpdate: PropTypes.func.isRequired
};

export default Search;
