import React from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';
import { Link } from 'react-router-dom';
import { search } from '../api/BooksAPI';
import SearchedResults from './SearchResults';

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
        <SearchedResults
          onBookUpdate={this.props.onBookUpdate}
          searched={this.state.searchedBooks}
          filtered={this.props.filteredByShelf}
        />
      </div>
    );
  }
}

Search.propTypes = {
  onBookUpdate: PropTypes.func.isRequired,
  filteredByShelf: PropTypes.object.isRequired
};

Search.defaultProps = {
  filteredByShelf: {}
};

export default Search;
