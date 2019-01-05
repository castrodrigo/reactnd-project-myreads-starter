import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import Search from './Search';
import List from './List';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };
  shelves = [
    { name: 'Currently Reading', type: 'currentlyReading' },
    { name: 'Want to Read', type: 'wantToRead' },
    { name: 'Read', type: 'read' }
  ];
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <List books={this.state.books} shelves={this.shelves} />
          )}
        />
        <Route
          path="/search"
          render={() => <Search books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
