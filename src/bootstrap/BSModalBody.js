/**
 * Created by PankajK1 on 12/17/2015.
 */

import React, { PropTypes, Component } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';

class BSModalBody extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {
    className: ''
  };

  render() {
    const classes = classnames(
      BSUtils.modalBodyClass,
      this.props.className
    )
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default BSModalBody;
