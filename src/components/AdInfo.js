/* AD MODAL INFO COMPONENT
 * @AUTHOR Ian Sayre 08/01/16
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AdModalStatus from './AdModalStatus';
import Grid from './Layout/Grid';
import Row from './Layout/Row';
import Col from './Layout/Col';

class AdInfo extends Component {
  static propTypes = {
    adBlock: PropTypes.bool,
    adDomain: PropTypes.arrayOf(PropTypes.string),
    adType: PropTypes.string,
    bidderId: PropTypes.string,
    bidderName: PropTypes.string,
    creativeID: PropTypes.string,
    helpLink: PropTypes.node,
    hide: PropTypes.bool,
    iabCats: PropTypes.arrayOf(PropTypes.string),
    reason: PropTypes.string,
    status: PropTypes.number,
    statusAction: PropTypes.object
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { adDomain, adType, bidderId, bidderName, creativeID, helpLink, hide, iabCats, reason, status, statusAction } = this.props;
    const classes = classnames(
      'ad-info',
      hide ? null : 'hide'
    );

    return (
      <div className={classes}>
        <div className="marg-t-lg marg-r-md marg-b-lg marg-l-md">
          <Grid>
            <section>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <p className="data-label">Bidder</p>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <p className="ad-data">{bidderName} <span className="bidder-id">({bidderId})</span></p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <p className="data-label">Ad Type</p>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <p className="ad-data">{adType}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <p className="data-label">Creative ID</p>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <p className="ad-data">{creativeID}</p>
                </Col>
              </Row>
            </section>
            <section>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <p className="data-label">Advertiser Domain URLS</p>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <p className="ad-data">{adDomain}</p>
                </Col>
              </Row>
               <Row>
                <Col sm={6} md={6} lg={6}>
                  <p className="data-label">IAB Categories</p>
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <p className="ad-data">{iabCats}</p>
                </Col>
              </Row>
            </section>
          </Grid>
        </div>
        <AdModalStatus adAction={statusAction} adStatus={status} helpLink={helpLink} reason={reason}/>
      </div>
    );
  }
}

export default AdInfo;
