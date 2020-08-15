import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox';
import Root from '../../Root'

let wrapped;
beforeEach(() => {
  // mount to fake dom
  wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a textarea and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});



describe('text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('has a textarea that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });

  it('when form is submitted textarea empty', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
})