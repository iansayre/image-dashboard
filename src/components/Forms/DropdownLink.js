/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSDropdownLink from '../../bootstrap/BSDropdownLink.js';

class DropdownLink extends Component {

  static propTypes = {};
  static defaultProps = {
    isDropdownItem:true
  };

  render() {
    return (
      <BSDropdownLink {...this.props}>{this.props.children}</BSDropdownLink>
    );
  }
}

export default DropdownLink;
