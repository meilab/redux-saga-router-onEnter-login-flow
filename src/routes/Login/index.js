
export default function createRoutes (store) {
  return {
    path: 'login',
    getComponents (location, cb) {
      require.ensure([
        './containers/Login'
      ], (require) => {
        let LoginPage = require('./containers/Login').default
        cb(null, LoginPage)
      })
    }
  }
}