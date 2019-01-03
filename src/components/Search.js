import React from 'react';
import { Link } from 'react-router-dom';
import { search } from '../api/BooksAPI';
import Book from './Book';

class Search extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.setState({ books: this.props.books });
  }
  onChangeHandler = event => {
    event.preventDefault();
    search(event.target.value).then(books => this.setState({ books }));
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
