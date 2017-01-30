/**
 * Created by chetanv on 24/11/15.
 */

import React, { Component, PropTypes, Children } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';
import BSButton from './BSButton.js';
//import DOMUtil from '../utils/DomUtil.js';

class BSDropdown extends Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    onMenuClick: PropTypes.func
  };
  static defaultProps = {
    label: 'A BSDropdown',
    onMenuClick: () => {}
  };

  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick() {
    this.props.onMenuClick(this.props);
  }

  render() {

    const {label, children, onMenuClick} = this.props;

    const classes = classnames(
      BSUtils.dropdownClass,
      this.props.className
    )

    const dropDownItems = Children.map(children,
        child => child.props.isDropdownItem ?
          child :
          <div className={BSUtils.dropdownItemClass} onMenuClick={onMenuClick}>{child}</div>
    );

    return (
      <div className={classes}>
        <BSButton label={label} block={false} className={BSUtils.dropdownToggleClass} type="secondary" data-toggle={BSUtils.dropdownClass}/>
        <div className="dropdown-menu dropdown-menu-right">
          {dropDownItems}
        </div>
      </div>
    );
  }
}

export default BSDropdown;
