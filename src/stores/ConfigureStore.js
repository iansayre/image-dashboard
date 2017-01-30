/*
 * APP STORE
 * @AUTHOR Ian Sayre 10/10/16
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import actionLogger from '../middleware/actionLogger';
import adQualityApp from '../reducers';

function configureStore() {

  let AppStore = createStore(adQualityApp, applyMiddleware(thunk, multi, actionLogger));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      AppStore.replaceReducer(nextReducer)
    })
  }

  return AppStore
}



export default configureStore;
