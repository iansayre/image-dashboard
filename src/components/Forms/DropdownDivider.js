/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSDropdownDivider from '../../bootstrap/BSDropdownDivider.js';

class DropdownDivider extends Component {

  static propTypes = {};
  static defaultProps = {
    isDropdownItem: true
  };

  render() {
    return (
      <BSDropdownDivider />
    );
  }
}

export default DropdownDivider;
