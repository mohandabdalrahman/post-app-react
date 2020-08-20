import { CHANGE_AUTH } from './types'

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}