/* @RETURNS Ad Modal Status Component
 * @AUTHOR Ian Sayre 08/03/16
 */

import React, { Component, PropTypes } from 'react';


class AdModalStatus extends Component {
  static propTypes = {
    adAction: PropTypes.object,
    adStatus: PropTypes.oneOf([-1, 0, 1, 2, 3, 4]),
    helpLink: PropTypes.node,
    reason: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.renderReason = this.renderReason.bind(this);
    this.renderStatus = this.renderStatus.bind(this);
  }

  renderReason(reason) {
    let badUrl,
        blockReason,
        newReason = '';

    newReason = reason.split(/-\s|:/);

    if (newReason[3].indexOf('//') > -1) {
      badUrl = newReason[3].split('/')[2];
    }
    else {
      badUrl = newReason[3].split('/')[0];
    }

    if (badUrl) {
      blockReason = (newReason[0] + ' ' + badUrl);
    }
    else {
      blockReason = newReason[0];
    }

    return blockReason;

  }

  renderStatus(adStatus, reason) {

    let blockReason = '';

    if (adStatus === 1) {
      if (reason) {
        blockReason = this.renderReason(reason);

        return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>Blocked <br /><span className="flag-reason">{blockReason}</span></p>);
      }


      return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>Blocked</p>);
    }
    else if (adStatus === 2) {
      if (reason) {
         blockReason = this.renderReason(reason);

        return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>Manually Blocked <br /><span className="flag-reason">{blockReason}</span></p>) ;
      }
      return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>Manually Blocked</p>);
    }
    else if (adStatus === 4) {
      if (reason) {
         blockReason = this.renderReason(reason);

        return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>SDK Blocked <br /><span className="flag-reason">{blockReason}</span></p>);
      }
      return (<p className="ad-status"><i className="ad-flag ad-blocked fa fa-flag marg-r-xs" aria-hidden="true"></i>SDK Blocked</p>);
    }
    else {
      return (<p className="ad-status"><i className="ad-flag ad-allowed fa fa-check marg-r-xs" aria-hidden="true"></i>Allowed</p>);
    }
  }

  render() {
    const { adAction, adStatus, helpLink, reason } = this.props;

    return (
      <div className="ad-status-footer border-t pad-md">
        <div className="clearfix pull-left">
          <h6>Status<span>{helpLink}</span></h6>
          {this.renderStatus(adStatus, reason)}
        </div>
          {adAction}
      </div>
    );
  }
}

export default AdModalStatus;
