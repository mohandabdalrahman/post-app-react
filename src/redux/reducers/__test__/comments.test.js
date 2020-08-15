import commentsReducer from '../comments'
import { SAVE_COMMENTS } from '../../actions/types'

it('handle action of type save comments', () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: 'new comment'
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['new comment'])
});