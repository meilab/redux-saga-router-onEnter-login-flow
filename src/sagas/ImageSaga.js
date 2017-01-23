import "babel-polyfill"
import { take, put, call } from 'redux-saga/effects'
import GalleryActions, { ImageTypes } from '../routes/Gallery/redux'
import { fetchImages } from '../services/Api'


export function * requestImages() {
  const images = yield call(fetchImages);
  const selectedImage = images[0];

  yield put(GalleryActions.loadImageSuccess(images));
  yield put(GalleryActions.selectImage(selectedImage))
}

export function * watchRequestImages() {
  while (true) {
    yield take(ImageTypes.LOAD_IMAGE_REQUEST);

    yield call(requestImages);
  }
}