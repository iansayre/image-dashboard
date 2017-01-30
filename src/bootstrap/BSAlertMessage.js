/**
 * Created by chetanv on 22/12/15.
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import BSUtil from '../utils/BootstrapUtils';

class BSAlertMessage extends Component {

  static propTypes = {
    type: PropTypes.oneOf(['success', 'danger', 'warning', 'info']),
    label: PropTypes.string,
    message: PropTypes.string
  };

  static defaultProps = {
    type: 'info',
    label: null,
    message: null
  };

  render() {
    const { label, message, type } = this.props;
    const className = classnames(BSUtil.alertClass, `${BSUtil.alertClass}-${type}`)

    return (message) ?
      <div className={className} role="alert">
        <strong>{label}</strong> {message}
      </div> :
      null;
  }
}

export default BSAlertMessage;
