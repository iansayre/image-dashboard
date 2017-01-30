/*
 * Bootstrap Nav Bar Component
 *@AUTHOR Ian Sayre 06/22/16
 */

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import BSUtils from '../utils/BootstrapUtils.js';

class BSNavbar extends Component {
  static propTypes = {
    brandLink: PropTypes.string,
    brandSrc: PropTypes.string,
    fixed: PropTypes.oneOf(['top', 'bottom', null]),
    className: PropTypes.string
  };
  static defaultProps = {
    brandLink: '#',
    brandSrc: '',
    fixed: null,
    className: ''
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { brandLink, brandSrc, fixed, className, children } = this.props;

    const classes = classnames(
      BSUtils.navBarClass,
      BSUtils.getFixedNavBar(fixed),
      className
    );

    return (
      <nav className={classes}>
        <div className="container-fluid">
          <Link className="navbar-brand pull-left" to={brandLink}>
            <img alt="brand" src={brandSrc} />
          </Link>
          {children}
        </div>
      </nav>
    );
  }
}

export default BSNavbar;
