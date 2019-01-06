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
          ]
        }));
      } else {
        this.setState(prevState => ({
          books: [...prevState.books.filter(item => item.id !== book.id)]
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
          render={() => <Search onBookUpdate={this.updateBookShelfHandler} />}
        />
      </div>
    );
  }
}

export default BooksApp;
