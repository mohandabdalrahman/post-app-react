import commentsReducer from './comments'
import authReducer from './auth'
import { combineReducers } from 'redux'

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
})