/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSDropdownButton from '../../bootstrap/BSDropdownButton.js';

class DropdownButton extends Component {

  static propTypes = {
    label: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    block: PropTypes.bool,
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    label: 'A Button',
    onClick: () => {},
    type: 'primary',
    block: true,
    submit: false,
    disabled: false,
    isDropdownItem: true,
  };

  render() {
    return (
      <BSDropdownButton {...this.props} />
    );
  }
}

export default DropdownButton;
