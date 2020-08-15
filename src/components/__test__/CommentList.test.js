import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import Root from '../../Root'

let wrapped;
beforeEach(() => {
  const initalState = {
    comments: ['comment 1']
  }
  wrapped = mount(<Root initalState={initalState}><CommentList /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('create one li per comment', () => {
  console.log(wrapped.find('li').length);
});