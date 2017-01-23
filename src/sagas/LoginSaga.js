import { put, take, call } from 'redux-saga/effects';
import LoginActions, { LoginTypes }  from '../redux/Login'

export function * login(username, password, redirectTo) {
  if (password === '') {
    yield put(LoginActions.loginFailure('WRONG PASSWORD'))
  } else {
    yield put(LoginActions.loginSuccess(redirectTo))
  }
}

export function * watchLogin() {
  while (true) {
    const action = yield take(LoginTypes.LOGIN_REQUEST)
    const { username, password, redirectTo } = action

    yield call(login, username, password, redirectTo)
  }
}