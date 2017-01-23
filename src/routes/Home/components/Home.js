import React from 'react';
import styles from './HomeStyle';

const Home = () => {
  return (
    <div>
      <h2 style={styles.header}>About</h2>
      <p style={styles.lead}>
        This is an example react application (master-detail feed) with isomorphic rendering, async react-router routes, async redux reducers, async data fetching, and code-splitting.
      </p>
      <h2 style={styles.header}>Motivation</h2>
      <p style={styles.lead}>
        The file size of isomorphic React apps can quickly get out of hand. Many isomorphic starter kits look awesome to begin with but yield a several megabyte javascript
        file for the client to download. This project aims to demonstrate some possible solutions.
      </p>
      <h2 style={styles.header}>Under the Hood</h2>
    </div>
  );
};

export default Home;