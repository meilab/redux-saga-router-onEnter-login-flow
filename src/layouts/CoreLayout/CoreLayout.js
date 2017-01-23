import React, {PropTypes} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavigationContainer from '../../containers/NavigationContainer'
import styles from './CoreLayoutStyle'

export const CoreLayout = ({children}) => {
  return (
    <div style={styles.mainContainer} >
      <Header style={styles.groupContainer} />
      <NavigationContainer style={styles.groupContainer} />
      <div style={styles.groupContainerVertical} >
        {children}
      </div>
      <Footer style={styles.groupContainer} />
    </div>
  );
};

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
};

export default CoreLayout;