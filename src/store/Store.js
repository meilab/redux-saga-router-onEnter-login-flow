import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as loginReducer } from '../redux/Login'

import createSagaMiddleware from 'redux-saga'

import sagas from '../sagas'

export function createReducer (asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    form: formReducer,
    login: loginReducer,
    ...asyncReducers
  })
}

export function injectAsyncReducer (store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

export default () => {
  let middleWare = []
  const sagaMiddleware = createSagaMiddleware()
  middleWare.push(sagaMiddleware)

  const rootReducer = createReducer()

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleWare)
  )

  // kick off root saga
  sagaMiddleware.run(sagas)

  store.asyncReducers = {}

  return store
}