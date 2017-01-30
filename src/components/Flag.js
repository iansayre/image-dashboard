/* @RETURNS Flag component
 * @AUTHOR Ian Sayre
 */

import React, { Component, PropTypes } from 'react';


class FlagCompontent extends Component {
  static propTypes = {
    isVisible: PropTypes.oneOf([-1, 0, 1, 2, 3, 4])
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  visibilityCheck(visible) {
    if (visible === 1 || visible === 2 || visible === 4) {
      return 'card-flag marg-t-xs';
    }

    return 'card-flag marg-t-xs hide';
  }

  render() {

    return(
      <div className={this.visibilityCheck(this.props.isVisible)}>
        <i className="ad-flag ad-blocked fa fa-flag" aria-hidden="true"></i>
      </div>
    );
  }
}

export default FlagCompontent;
