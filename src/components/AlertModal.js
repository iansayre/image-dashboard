/* @RETURNS Alert Modal Component
 * @AUTHOR Ian Sayre 10/6/16
 */


import React, { Component, PropTypes } from 'react';
import jQuery from 'jQuery';
import AlertMessage from './AlertMessage';

class AlertModal extends Component {
  static propTypes = {
    alertType: PropTypes.oneOf(['success', 'danger', 'warning', 'info']),
    alertLabel: PropTypes.string,
    alertMessage: PropTypes.string,
    close: PropTypes.func,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.showHide();
  }

  componentDidUpdate() {
    this.showHide();
  }

  componentWillUnmount() {
    jQuery(this.refs.alert).hide();
  }

  close() {
    this.props.close();
  }

  showHide() {
    const { show } = this.props;

    if (show) {
      const alert = this.refs.alert;

      jQuery(alert).show();
    }
    else {
      jQuery(this.refs.alert).hide();
    }
  }

  render() {
    const { alertType, alertLabel, alertMessage } = this.props;

    return (
      <div ref="alert" className="alert-container">
          <AlertMessage type={alertType} label={alertLabel} message={alertMessage}/>
          <i className="fa fa-times alert-btn" role="button" onClick={this.close}></i>
      </div>
    );
  }
}


export default AlertModal;
