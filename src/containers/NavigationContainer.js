import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import LoginActions from '../redux/Login';

const mapStateToProps = (state) => {
  return {
    loginState: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogout: () => dispatch(LoginActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)