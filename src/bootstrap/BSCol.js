/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';

class BSCol extends Component {

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
    xs: 0,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    offsetXs: 0,
    offsetSm: 0,
    offsetMd: 0,
    offsetLg: 0,
    offSetXl: 0,
    className: ''
  };

  render() {

    const { xs, sm, md, lg, xl, offsetXs, offsetSm, offsetMd, offsetLg, offsetXl, hideSize, hideDirection, className } = this.props;

    const classes = classnames(
      BSUtils.colClass,
      BSUtils.getColSizeClass('xs', xs),
      BSUtils.getColSizeClass('sm', sm),
      BSUtils.getColSizeClass('md', md),
      BSUtils.getColSizeClass('lg', lg),
      BSUtils.getColSizeClass('xl', xl),
      BSUtils.getColOffsetClass('xs', offsetXs),
      BSUtils.getColOffsetClass('sm', offsetSm),
      BSUtils.getColOffsetClass('md', offsetMd),
      BSUtils.getColOffsetClass('lg', offsetLg),
      BSUtils.getColOffsetClass('xl', offsetXl),
      hideSize ? BSUtils.getHideSizeClass(hideSize, hideDirection) : null,
      className,
    );

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default BSCol;
