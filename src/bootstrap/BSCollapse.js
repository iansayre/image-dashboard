/* @RETURNS Bootstrap Collapse Component
 * @AUTHOR Ian Sayre 09/13/16
 */


import React, { Component, PropTypes } from 'react';

class BSCollapse extends Component {
  static propTypes = {
    collapseId: PropTypes.string.isRequired
  };
  static defaultProps = {
    collapeseId: 'collapse-block'
  };

  render() {
    return(
      <div className="collapse" id={this.props.collapeseId}>
        {this.props.children}
      </div>
    );
  }
}

export default BSCollapse;
