/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component } from 'react';
import BSRow from '../../bootstrap/BSRow.js';

class Row extends Component {

  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <BSRow {...this.props}>
        {this.props.children}
      </BSRow>
    );
  }
}

export default Row;
