import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer'
import createStore from './store/Store'

const store = createStore()
const MOUNT_NODE = document.getElementById('root')
const routes = require('./routes/index').default(store)

ReactDOM.render(
  <AppContainer store={store} routes={routes} />,
  MOUNT_NODE
);
