import React, { Component } from 'react';
import AlertMessage from './AlertMessage';

class NotFoundPage extends Component {
  static propTypes={};
  static defaultProps={};

  render() {
    return(
      <AlertMessage type="danger" label="ERROR: " message="The page could not be found." />
    )
  }
}

export default NotFoundPage;
