/**
  * Icon Component
  @RETURNS The Opera MediaWorks Icon
  @AUTHOR Ian Sayre
*/

import React, { PropTypes } from 'react';
import classnames from 'classnames';

class Logo extends React.Component {

  static propTypes = {
    brand: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    brand: false,
    className: '',
    imageUrl: ''
  };

  render() {
    const {className} = this.props;

    const classes = classnames(
      className,
    );

    return (
      <div className = {classes}></div>
    );
  }
}

export default Logo;
