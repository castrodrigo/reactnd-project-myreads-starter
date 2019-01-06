import React from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';
import { Link } from 'react-router-dom';
import { search } from '../api/BooksAPI';
import Book from './Book';

class Search extends React.Component {
  state = {
    searchedBooks: [],
    query: ''
  };

  onQuerySearchHandler = query => {
    search(query).then(books => {
      const booksData = books ? (books.error ? [] : books) : [];
      this.setState({ searchedBooks: booksData });
    });
  };

  onQueryChangeHandler = query => {
    this.setState({ query }, () => {
      const { query } = this.state;
      if (query.length < 3) {
        throttle(250, this.onQuerySearchHandler(query));
      } else {
        debounce(250, this.onQuerySearchHandler(query));
      }
    });
  };

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
              onChange={e => this.onQueryChangeHandler(e.target.value)}
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
