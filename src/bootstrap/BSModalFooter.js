/**
 * Created by PankajK1 on 12/17/2015.
 */

import React, { Component } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class BSModalFooter extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={BSUtils.modalFooterClass}>
        {this.props.children}
      </div>
    );
  }
}

export default BSModalFooter;
