import React from 'react';
import { shallow } from 'enzyme';
import BookShelf from './BookShelf';
import Book from './Book';
import BookMockData from './__mocks__/bookData';

describe('Book Shelf', () => {
  const props = {
    books: [
      {
        ...BookMockData,
        id: '3874929',
        tittle: 'book1',
        shelf: 'sh1'
      },
      {
        ...BookMockData,
        id: '0998983',
        tittle: 'book2',
        shelf: 'sh2'
      },
      {
        ...BookMockData,
        id: '5354335',
        tittle: 'book3',
        shelf: 'sh2'
      },
      {
        ...BookMockData,
        id: '0351399',
        tittle: 'book4',
        shelf: 'sh3'
      }
    ],
    filtered: [],
    onBookUpdate: jest.fn()
  };

  it('should filter books by shelf', () => {
    const mockFiltered = ['3874929'];
    const wrapper = shallow(
      <BookShelf {...props} name="Shelf 1" filtered={mockFiltered} />
    );

    const books = wrapper.find(Book);

    expect(books.length).toBe(1);
  });

  it('should filter multiple books by shelf', () => {
    const mockFiltered = ['0998983', '5354335'];
    const wrapper = shallow(
      <BookShelf {...props} name="Shelf 2" filtered={mockFiltered} />
    );

    const books = wrapper.find(Book);

    expect(books.length).toBe(2);
  });

  it('should not return an error with there are no books on the shelf', () => {
    const wrapper = shallow(<BookShelf {...props} name="Shelf 4" />);

    const books = wrapper.find(Book);

    expect(books.length).toBe(0);
  });
});
