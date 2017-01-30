/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSCol from '../../bootstrap/BSCol.js';


class Col extends Component {

  static propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    offsetXs: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetMd: PropTypes.number,
    offsetLg: PropTypes.number,
    offSetXl: PropTypes.number,
    hideSize: PropTypes.string,
    hideDirection: PropTypes.oneOf(['up', 'down']), // hide div on lower viewports or higher viewports. for bootstrap. @AUTHOR: Ian Sayre
    className: PropTypes.string
  };

  static defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    offsetXs: 0,
    offsetSm: 0,
    offsetMd: 0,
    offsetLg: 0,
    offSetXl: 0,
    className: ''
  };

  render() {
    return (
      <BSCol {...this.props}>
        {this.props.children}
      </BSCol>
    );
  }
}

export default Col;
