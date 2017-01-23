import { redirectToLogin } from '../utils'
import { isLoggedIn } from '../redux/Login';

export const createRoutes = (store) => ({
  onEnter: redirectToLogin(isLoggedIn(store.getState().login)),

  getChildRoutes (location, cb) {
    require.ensure([],(require) => {
      cb(null, [
        require('./Gallery').default(store), // add async reducer
      ])
    })
  }
})

export default createRoutes