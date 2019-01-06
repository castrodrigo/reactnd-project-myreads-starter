import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import BookShelf from './BookShelf';

describe('List', () => {
  const props = {
    books: [],
    shelves: [{ name: 'Sh 1', type: 'sh1' }, { name: 'Sh 2', type: 'sh2' }],
    onBookUpdate: jest.fn()
  };

  it('should render as multilple shelves as received', () => {
    const wrapper = shallow(<List {...props} />);

    const children = wrapper.find(BookShelf);

    expect(children.length).toBe(2);
  });

  it('should render as 0 shelves if 0 received', () => {
    const wrapper = shallow(<List {...props} shelves={[]} />);

    const children = wrapper.find(BookShelf);

    expect(children.length).toBe(0);
  });
});
