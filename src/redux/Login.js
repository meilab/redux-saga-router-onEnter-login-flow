import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password', 'redirectTo'],
  loginSuccess: ['redirectTo'],
  loginFailure: ['error'],
  logout: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  fetching: false,
  isAuthenticated: false,
  redirectTo: '/'
})

/* ------------- Reducers ------------- */

export const request = (state, action) =>
  state.merge({
    fetching: true,
    username: action.username
  })

export const success = (state, { redirectTo }) =>
  state.merge({
    fetching: false,
    error: null,
    isAuthenticated: true,
    redirectTo
  })

export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

export const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

export const isLoggedIn = (loginState) => loginState.username !== null