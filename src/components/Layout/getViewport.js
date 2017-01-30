import React, { Component } from 'react';
import EventEmitter from 'eventemitter3';

let EE;
let viewport = {width: 1440, height: 900}; // default base size
const RESIZE_EVENT = 'resize';

function handleWindowResize() {
  if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
    viewport = {width: window.innerWidth, height: window.innerHeight};
    EE.emit(RESIZE_EVENT, viewport);
  }
}

function getViewport(ComposedComponent) {
  return class WithViewport extends Component {
    constructor() {
      super();
      this.state = {
        viewport: viewport
      }
    }

    componentDidMount() {
      if (!EE) {
        EE = new EventEmitter();
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('orientationchange', handleWindowResize);
      }

      EE.on(RESIZE_EVENT, this.handleResize, this);
    }

    componentWillUnmount() {
      EE.removeListener(RESIZE_EVENT, this.handleResize, this);
      if (!EE.listeners(RESIZE_EVENT, true)) {
        window.removeEventListener('resize', handleWindowResize);
        window.removeEventListener('orientationchange', handleWindowResize);
        EE = null;
      }
    }

    render() {
      return <ComposedComponent {...this.props} viewport={this.state.viewport}/>
    }

    handleREsize(value) {
      this.setState({viewport: value}); // eslint-disable-line react/no-set-state
    }
  };
}

export default getViewport;
