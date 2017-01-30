/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSDropdown from '../../bootstrap/BSDropdown.js';

class Dropdown extends Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.node.isRequired
  };

  static defaultProps = {
    label: 'A Dropdown',
  };

  render() {

    return (
      <BSDropdown {...this.props}>
        {this.props.children}
      </BSDropdown>
    );
  }
}

export default Dropdown;
