import { SAVE_COMMENTS } from './types'
// import axios from 'axios'
export const saveComments = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  }
}


export const fetchComments = async () => {
  // const res = await axios.get('')
}
