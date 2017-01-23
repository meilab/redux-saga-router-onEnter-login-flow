import React from 'react';
import styles from './FooterStyle'

const Footer = () => {
  return (
    <div style={styles.root} >
      <div style={styles.container} >
        <div style={styles.text} >
          © 2017 meilab
        </div>
      </div>
    </div>
  );
};

export default Footer;