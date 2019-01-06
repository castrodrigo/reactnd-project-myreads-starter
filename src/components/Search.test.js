import React from 'react';
import { shallow } from 'enzyme';
import { throttle, debounce } from 'throttle-debounce';
import Search from './Search';
import Book from './Book';
import searchData from './__mocks__/searchData';

jest.mock('throttle-debounce', () => ({
  throttle: jest.fn(),
  debounce: jest.fn()
}));

describe('Search', () => {
  const props = {
    onBookUpdate: jest.fn()
  };

  it('should call throttle if less than 3 chars', () => {
    const wrapper = shallow(<Search {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'ab' } });

    expect(throttle).toHaveBeenCalledTimes(1);
    expect(debounce).toHaveBeenCalledTimes(0);
  });

  it('should call debounce if less more 2 chars', () => {
    const wrapper = shallow(<Search {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'abcd' } });

    expect(debounce).toHaveBeenCalledTimes(1);
  });

  it('should should show books that are related to the search', () => {
    const wrapper = shallow(<Search {...props} />);
    wrapper
      .instance()
      .setState({ searchedBooks: searchData.books, query: 'sci' });

    const books = wrapper.find(Book);

    expect(books.length).toBe(2);
  });

  it('should should show no books if no books were found', () => {
    const wrapper = shallow(<Search {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'momentum' } });
    const books = wrapper.find(Book);

    expect(books.length).toBe(0);
  });

  it('should should show no books if search field is empty', () => {
    const wrapper = shallow(<Search {...props} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: '' } });
    const books = wrapper.find(Book);

    expect(books.length).toBe(0);
  });
});
