import React from 'react';
import { shallow } from 'enzyme';
import BookAuthors from './BookAuthors';

describe('Book Authors', () => {
  it('should render 1 book authors if receives 1', () => {
    const authors = ['author 1'];
    const wrapper = shallow(<BookAuthors authors={authors} />);

    const textGenerated = wrapper.find('div').text();

    expect(textGenerated).toBe('author 1');
  });

  it('should render 2 book authors if receives 2', () => {
    const authors = ['author 1', 'author 2'];
    const wrapper = shallow(<BookAuthors authors={authors} />);

    const textGenerated = wrapper.find('div').text();

    expect(textGenerated).toBe('author 1 | author 2');
  });
});
