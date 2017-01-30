import React from 'react';
import ReactDOM from 'react-dom';
import location from './utils/Location';
// import router from './router.js';

class AppRenderer {

  currentState = null;
  currentLocation = null;
  appContainer = document.getElementById('app');

  reRender() {
    setTimeout(() => this.render(), 1);
  }

  render(state, location) {
    this.currentState = state || this.currentState;
    this.currentLocation = location || this.currentLocation;

    // router.dispatch(this.currentState, (newState, component) => {
    //   ReactDOM.render(component, this.appContainer);
    // });
  }
}

export default new AppRenderer();
