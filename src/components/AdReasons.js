/* @RETURNS Ad Block Option Component
 * @AUTHOR Ian Sayre 09/28/16
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Button from './Button';

class AdReasons extends Component {
  static propTypes = {
    block: PropTypes.bool,
    cancelClick: PropTypes.func,
    hide: PropTypes.bool
  };
  static defaultProps = {
    cancelClick: () => {}
  };

  constructor(props) {
    super(props);
    this.cancelClick = this.cancelClick.bind(this);
  }

  cancelClick() {
    this.props.cancelClick();
  }

  render() {
    const blockStatus = this.props.block ? 'blocking' : 'unblocking';

    const classes = classnames(
      'ad-info',
      'marg-t-lg',
      'marg-r-md',
      'marg-b-lg',
      'marg-l-md',
      this.props.hide ? null : 'hide'
    );

    return (
      <div className={classes}>
        <p className="ad-status">Why are you {blockStatus} this ad?</p>
        <ul className="block-options marg-t-lg">
          {this.props.children}
        </ul>
        <Button block={false} className="pull-left cancel-btn" type="secondary" label="Cancel" onClick={this.cancelClick}/>
      </div>
    );
  }
}

export default AdReasons;
