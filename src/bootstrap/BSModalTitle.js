/**
 * Created by PankajK1 on 12/17/2015.
 */

import React, { PropTypes, Component } from 'react';
import BSUtils from '../utils/BootstrapUtils';

class BSModalTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  static defaultProps = {
    title: 'Modal Title',
  };

  render() {
    return <h4 className={BSUtils.modalTitleClass}>{this.props.title}</h4>;
  }
}

export default BSModalTitle;
