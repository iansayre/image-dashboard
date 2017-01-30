/**
 * Created by PankajK1 on 12/17/2015.
 */

import React, { PropTypes, Component } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import BSModalCloseButton from './BSModalCloseButton';
import emptyFunction from 'fbjs/lib/emptyFunction';

class BSModalHeader extends Component {
  static propTypes = {
    showCloseButton: PropTypes.bool,
    onClose: PropTypes.func
  };
  static defaultProps = {
    showCloseButton: true,
    onClose: emptyFunction
  };

  render() {
    const closeButton = this.props.showCloseButton ?
      <BSModalCloseButton onClose={this.props.onClose}/> :
      null;

    return (
      <div className={BSUtils.modalHeaderClass}>
        {closeButton}
        {this.props.children}
      </div>
    );
  }
}

export default BSModalHeader;
