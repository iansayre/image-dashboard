/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class BSGrid extends Component {

  static propTypes = {
    fluid: PropTypes.bool
  };
  static defaultProps = {
    fluid: true
  };

  render() {
    return (
      <div className={BSUtils.getContainerClass(this.props.fluid)}>
        {this.props.children}
      </div>
    );
  }
}

export default BSGrid;
