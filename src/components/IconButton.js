/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import Button from './Button.js';
import FontIcon from './FontIcon.js';

class IconButton extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    block: PropTypes.bool,
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    onClick: () => {},
    type: 'primary',
    block: false,
    submit: false,
    disabled: false,
  };

  render() {
    const { icon, ...props } = this.props;
    const iconLabel = <FontIcon icon={icon} />;
    return (
      <Button {...props} label={iconLabel} />
    );
  }
}

export default IconButton;
