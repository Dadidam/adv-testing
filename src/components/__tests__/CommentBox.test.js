import React from 'react';
import { mount, unmount, simulate, update, prop } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

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

it('has a text area that users can type in', () => {
  const value = 'new comment';

  wrapped.find('textarea').simulate('change', { target: { value } });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual(value);
});

it('clears text area after form submission', () => {
  const value = 'new comment';

  wrapped.find('textarea').simulate('change', { target: { value } });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual(value);

  wrapped.find('form').simulate('submit');
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
