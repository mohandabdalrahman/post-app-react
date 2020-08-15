import commentsReducer from './comments'
import { combineReducers } from 'redux'

export default combineReducers({
  comments: commentsReducer
})