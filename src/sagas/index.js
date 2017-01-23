import { fork } from 'redux-saga/effects'
import { watchRequestImages } from './ImageSaga'
import { watchLogin } from './LoginSaga'

// start the daemons
export default function * root () {
  yield fork(watchRequestImages)
  yield fork(watchLogin)
}