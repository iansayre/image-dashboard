/**
 * Created by chetanv on 25/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSGrid from '../../bootstrap/BSGrid.js';
// import '!style!css!sass!../../styles/layout/_grid.scss';

class Grid extends Component {

  static propTypes = {
    fluid: PropTypes.bool
  };
  static defaultProps = {
    fluid: true
  };

  render() {
    return (
      <BSGrid {...this.props}>
        {this.props.children}
      </BSGrid>
    );
  }
}

export default Grid;
