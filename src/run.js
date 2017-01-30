import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './stores/ConfigureStore';
import routes from './routes';

import './utils/loadPlugins.js';

import './styles/App.scss';

const AppStore = configureStore();
// const history = syncHistoryWithStore(browserHistory, AppStore);

ReactDOM.render(
  <Provider store={AppStore}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app'));
