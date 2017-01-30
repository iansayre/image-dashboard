/**
 * Created by chetanv on 22/12/15.
 */

import React, { Component, PropTypes } from 'react';
import BSAlertMessage from '../bootstrap/BSAlertMessage';

class AlertMessage extends Component {

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
    return (
      <BSAlertMessage {...this.props} />
    );
  }
}

export default AlertMessage;
