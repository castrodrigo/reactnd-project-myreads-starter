import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import Search from './Search';
import List from './List';
import {
  generateFilters,
  convertResponseFilters,
  popBookList,
  updateBookList
} from '../helpers';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    filteredByShelf: {}
  };
  shelves = [
    { name: 'Currently Reading', type: 'currentlyReading' },
    { name: 'Want to Read', type: 'wantToRead' },
    { name: 'Read', type: 'read' }
  ];

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books, filteredByShelf: generateFilters(books) });
    });
  }

  updateBookShelfHandler = (book, shelf) => {
    BooksAPI.update(book, shelf).then(filteredByShelf => {
      const filter = convertResponseFilters(filteredByShelf);
      this.setState(prevState => ({
        books:
          filter[book.id] && filter[book.id] === shelf
            ? updateBookList(prevState.books, { ...book, shelf })
            : popBookList(prevState.books, book),
        filteredByShelf
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <List
              books={this.state.books}
              shelves={this.shelves}
              onBookUpdate={this.updateBookShelfHandler}
              filteredByShelf={this.state.filteredByShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              onBookUpdate={this.updateBookShelfHandler}
              filteredByShelf={convertResponseFilters(
                this.state.filteredByShelf
              )}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
