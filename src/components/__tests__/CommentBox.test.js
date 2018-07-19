import React from 'react';
import { mount, unmount, simulate, update, prop } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;
const value = 'new comment';

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value } });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(value);
  });

  it('clears text area after form submission', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
