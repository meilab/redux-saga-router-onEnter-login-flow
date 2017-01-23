import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginActions from '../../../redux/Login'
import LoginForm from '../components/LoginForm'
import R from 'ramda'

class Login extends Component {

  constructor(props) {
    super(props);

    this.handlePressLogin = this.handlePressLogin.bind(this);
  }

  checkAuthAndRedirect({ login, router }) {
    const { redirectTo, isAuthenticated } = login

    if ( isAuthenticated === true ) {
      router.replace(redirectTo)
    }
  }

  componentWillMount() {
    this.checkAuthAndRedirect(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuthAndRedirect(nextProps)
  }

  handlePressLogin(event) {
    const { attemptLogin, form, location } = this.props
    const { username='', password='' } = form.login.values
    let redirectTo = '/'

    event.preventDefault()

    if (!R.isNil(location.state) &&
        !R.isNil(location.state.nextPathname)) {
      redirectTo = location.state.nextPathname
    }
    attemptLogin(username, password, redirectTo)
  }

  render() {
    return (
      <div>
        <LoginForm handlePressLogin={this.handlePressLogin} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    form: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password, redirectTo) => 
      dispatch(LoginActions.loginRequest(username, password, redirectTo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)