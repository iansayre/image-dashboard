/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes } from 'react';
import FAFontIcon from '../font-awesome/FAFontIcon.js';

class FontIcon extends Component {

  static propTypes = {
    icon: PropTypes.oneOf([
      null,
      'calendar',
      'search',
      'warning',
    ]),
  };
  static defaultProps = {
    icon: null,
  };

  render() {
    return (
      <FAFontIcon icon={this.props.icon} />
    );
  }
}

export default FontIcon;
