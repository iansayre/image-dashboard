import React, { Component } from 'react';
import AlertMessage from './AlertMessage';

class ErrorPage extends Component {
  static propTypes={};
  static defaultProps={};

  render() {
    return(
      <AlertMessage type="warning" label="ERROR: " message="There was a problem loading the page" />
    )
  }
}

export default ErrorPage;
