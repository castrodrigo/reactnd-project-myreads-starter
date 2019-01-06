import React from 'react';
import { shallow } from 'enzyme';
import BookCover from './BookCover';

describe('Book Cover', () => {
  it('should render cover if received', () => {
    const imageLinks = { thumbnail: 'thumbnail' };
    const wrapper = shallow(<BookCover imageLinks={imageLinks} />);

    const cover = wrapper.find('div');

    expect(cover.props().style.backgroundImage).toBe('url(thumbnail)');
  });

  it('should not render background image if none is received', () => {
    const imageLinks = { thumbnail: null };
    const wrapper = shallow(<BookCover imageLinks={imageLinks} />);

    const cover = wrapper.find('div');

    expect(cover.props().style).not.toContain('backgroundImage');
  });

  it('should set height and weight overwriting defaultProps', () => {
    const props = { imageLinks: { thumbnail: null }, width: 60, height: 60 };
    const wrapper = shallow(<BookCover {...props} />);

    const cover = wrapper.find('div');

    expect(cover.props().style).toMatchObject({ width: 60, height: 60 });
  });
});
