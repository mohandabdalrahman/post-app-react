import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import reduxPromise from 'redux-promise'

export default ({ initalState = {}, children }) => {
  return (
    <Provider store={createStore(reducers, initalState, applyMiddleware(reduxPromise))}>
      {children}
    </Provider>
  )
}