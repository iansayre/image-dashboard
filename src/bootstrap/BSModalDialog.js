/**
 * Created by PankajK1 on 12/17/2015.
 */

import React, { PropTypes, Component } from 'react';
import jQuery from 'jQuery';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';

class BSModalDialog extends Component {
  static propTypes = {
    show: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // TODO: to support closing dialog via Esc key, add support for onClose callback.
    // keyboard: PropTypes.bool,
    //onClose: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    show: false,
    backdrop: 'static',
    //keyboard: true,
    //onClose: emptyFunction
    className: ''
  };

  render() {
    const classes = classnames(
      BSUtils.modalDialogClass,
      this.props.className
    )
    return (
      <div ref="modal" className={BSUtils.modalClass}>
        <div className={classes}>
          <div className={BSUtils.modalContentClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.showHideModal();
  }

  componentDidUpdate() {
    this.showHideModal();
  }

  componentWillUnmount() {
    jQuery(this.refs.modal).modal('hide');
  }

  showHideModal() {
    const {backdrop, show} = this.props;

    if(show) {
      const options = {
        keyboard: false,
        backdrop,
        show
      };
      jQuery(this.refs.modal).modal(options);
    } else {
      jQuery(this.refs.modal).modal('hide');
    }
  }
}

export default BSModalDialog;
