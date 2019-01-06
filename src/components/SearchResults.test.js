import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';
import Book from './Book';
import searchedBooks from './__mocks__/searchData';

describe('Search Results', () => {
  const props = {
    searched: searchedBooks.books,
    filtered: { F3JU3SJ5fDIC: 'read' },
    onBookUpdate: jest.fn()
  };

  it('should append shelf property to the list if matches the book id', () => {
    const wrapper = shallow(<SearchResults {...props} />);

    const book = wrapper.find(Book).first();
    const bookSearched = book.props().book;

    expect(bookSearched.shelf).toBe('read');
  });

  it('should not append shelf property to the list if does not match the book id', () => {
    const wrapper = shallow(<SearchResults {...props} filtered={{}} />);

    const book = wrapper.find(Book).first();
    const bookSearched = book.props().book;

    expect(bookSearched.shelf).not.toBeDefined();
  });

  it('should render the ammount of books found on the search', () => {
    const wrapper = shallow(<SearchResults {...props} />);

    const book = wrapper.find(Book);

    expect(book.length).toBe(2);
  });
});
