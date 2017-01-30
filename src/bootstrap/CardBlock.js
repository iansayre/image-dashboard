/**
 * Created by chetanv on 01/12/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';

class CardBlock extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className={BSUtils.cardBlockClass}>{this.props.children}</div>
    );
  }
}

export default CardBlock;