import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';
import BookMockData from './__mocks__/bookData';

describe('Book', () => {
  const props = {
    book: {
      ...BookMockData
    },
    onUpdate: jest.fn()
  };
  it('should render properly', () => {
    const wrapper = shallow(<Book {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
