import React from 'react';
import styles from './NavigationStyle';
import { Link } from 'react-router';
import { isLoggedIn } from '../../redux/Login';

const Navigation = ({ loginState, attemptLogout }) => {

  const loginItem = () => {
    let retItem

    if (isLoggedIn(loginState)) {
      retItem = (
          <Link to="/" style={styles.link} onClick={attemptLogout} >
            Logout
          </Link>
        )
    } else {
      retItem = <Link to="/login" style={styles.link} >Login</Link>
    }

    return retItem
  }

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.link} >Home</Link>
      <Link to="/gallery" style={styles.link} >Gallery</Link>
      {loginItem()}
    </div>
  );
};

export default Navigation