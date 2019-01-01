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
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <List books={this.state.books} />}
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
