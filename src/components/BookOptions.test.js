import React from 'react';
import { shallow } from 'enzyme';
import BookOptions from './BookOptions';

describe('Book Options', () => {
  const props = {
    shelf: 'wantToRead',
    onChange: jest.fn()
  };

  it('should show the selection value received', () => {
    const wrapper = shallow(<BookOptions {...props} />);

    const select = wrapper.find('select');

    expect(select.props().value).toBe('wantToRead');
  });

  it('should show no selection if no value is received', () => {
    const wrapper = shallow(<BookOptions {...props} shelf="" />);

    const select = wrapper.find('select');

    expect(select.props().value).toBe('');
  });
});
