
export const redirectToLogin = (loggedInStatus) => {
  return (nextState, replace) => {
    if(!loggedInStatus) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
}