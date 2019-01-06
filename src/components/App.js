import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import Search from './Search';
import List from './List';
import { convertResponseFilters } from '../helpers';
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
      const filteredByShelf = books.reduce((f, book) => {
        f[book.id] = book.shelf;
        return f;
      }, {});
      this.setState({ books, filteredByShelf });
    });
  }

  updateBookShelfHandler = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      const updatedShelf = Object.keys(data).find(
        key => data[key].filter(itemId => itemId === book.id)[0]
      );
      if (updatedShelf === shelf) {
        this.setState(prevState => ({
          books: [
            ...prevState.books.filter(item => item.id !== book.id),
            { ...book, shelf }
          ],
          filteredByShelf: convertResponseFilters(data)
        }));
      } else {
        this.setState(prevState => ({
          books: [...prevState.books.filter(item => item.id !== book.id)],
          filteredByShelf: convertResponseFilters(data)
        }));
      }
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
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              onBookUpdate={this.updateBookShelfHandler}
              filteredByShelf={this.state.filteredByShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
