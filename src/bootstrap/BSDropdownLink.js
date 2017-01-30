/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class BSDropdownLink extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <a {...this.props} className={BSUtils.dropdownItemClass}>{this.props.children}</a>
    );
  }
}

export default BSDropdownLink;