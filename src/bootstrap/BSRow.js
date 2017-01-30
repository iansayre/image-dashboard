/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class BSRow extends Component {

  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    return (
      <div className={BSUtils.rowClass}>
        {this.props.children}
      </div>
    );
  }
}

export default BSRow;
