/* @RETURNS Ad Modal Footer component
 * @AUTHOR Ian Sayre 08/01/16
 */

import React, { Component, PropTypes } from 'react';
// import Link from './Link';

class AdModalFooter extends Component {
  static propTypes = {
    adLink: PropTypes.string,
    markupClick: PropTypes.func,
    networkClick: PropTypes.func
  };

  static defaultProps = {
    markupClick: () => {},
    networkClick: () => {}
  };

  constructor(props) {
    super(props);
    this.markupClick = this.markupClick.bind(this);
    this.networkClick = this.networkClick.bind(this);
  }

  markupClick() {
    this.props.markupClick();
  }

  networkClick() {
    this.props.networkClick();
  }

  render() {

    return(
        <div className="modal-image-footer pad-sm">
          <div className="pull-left">
            <a href={this.props.adLink} target="_blank">Render Ad <i className="fa fa-arrow-up rotate-45" aria-hidden="true"></i></a>
          </div>
          <div className="pull-right clearfix">
            <ul className="modal-links">
              <li className="pad-r-md">
                <i className="fa fa-code-fork" aria-hidden="true" data-dismiss="modal" onClick={this.networkClick}></i>
              </li>
              <li className="pad-r-md">
                <i className="fa fa-code" aria-hidden="true" data-dismiss="modal" onClick={this.markupClick}></i>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default AdModalFooter;
