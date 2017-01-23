import { injectAsyncReducer } from '../../store/Store'

export default function createRoutes (store) {
  return {
    path: 'gallery',
    getComponents (location, cb) {
      require.ensure([
        './containers/Gallery',
        './redux'
      ], (require) => {
        let GalleryPage = require('./containers/Gallery').default
        let galleryReducer = require('./redux').reducer
        injectAsyncReducer(store, 'gallery', galleryReducer)
        cb(null, GalleryPage)
      })
    }
  }
}