import { SAVE_COMMENTS } from '../types'
import { saveComments } from '../comments'


describe('saveComment', () => {
  it('has correct type', () => {
    const action = saveComments('new comment')
    expect(action.type).toEqual(SAVE_COMMENTS)
  });

  it('has correct payload', () => {
    const action = saveComments('new comment')
    expect(action.payload).toEqual('new comment')
  });
})