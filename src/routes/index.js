import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,

  getChildRoutes (location, cb) {
    require.ensure([],(require) => {
      cb(null, [
        require('./ProtectedRoutes').default(store), // add async reducer
        require('./Login').default(store), // add async reducer
        require('./NotFound').default
      ])
    })
  }
})

export default createRoutes