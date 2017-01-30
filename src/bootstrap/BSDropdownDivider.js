/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class BSDropdownDivider extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={BSUtils.dropdownDividerClass}></div>
    );
  }
}

export default BSDropdownDivider;