import React from 'react';
import { shallow } from 'enzyme';
import BookOptions from './BookOptions';

describe('Book Options', () => {
  const props = {
    shelf: 'wantToRead',
    onUpdate: jest.fn()
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

  it('should call onUpdate on change', () => {
    const wrapper = shallow(<BookOptions {...props} />);

    wrapper.find('select').simulate('change', { target: { value: 'read' } });

    expect(props.onUpdate).toHaveBeenCalledTimes(1);
  });
});
