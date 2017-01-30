/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSButton from '../bootstrap/BSButton.js';

class Button extends Component {

  static propTypes = {
    label: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    block: PropTypes.bool,
    submit: PropTypes.bool,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    label: 'A Button',
    onClick: () => {},
    type: 'primary',
    block: true,
    submit: false,
    disabled: false
  };

  render() {
    return (
      <BSButton {...this.props} />
    );
  }
}

export default Button;
