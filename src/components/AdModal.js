/* @RETURNS Ad Modal Body
 * @AUTHOR Ian Sayre 08/08/16
 */

import React, { Component, PropTypes } from 'react';
import BSModalDialog from '../bootstrap/BSModalDialog';
import BSModalBody from '../bootstrap/BSModalBody';
import Grid from '../components/Layout/Grid';
import Row from '../components/Layout/Row';
import Col from '../components/Layout/Col';
import AdImage from '../components/AdImage';


class AdModal extends Component {
  static propTypes = {
    close: PropTypes.func,
    imageURL: PropTypes.string,
    markupURL: PropTypes.string,
    markupClick: PropTypes.func,
    networkClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    show: PropTypes.bool
  };

  static defaultProps = {
    close: () => {},
    markupClick: () => {},
    networkClick: () => {}
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.markupClick = this.markupClick.bind(this);
    this.networkClick = this.networkClick.bind(this);
  }

  close() {
    this.props.close();
  }

  markupClick() {
    this.props.markupClick();
  }

  networkClick() {
    this.props.networkClick();
  }

  onKeyDown() {
    this.props.onKeyDown();
  }

  render() {
    const { imageURL, markupURL, show } = this.props;
    return (
      <BSModalDialog className="ad-modal" show={show}>
        <BSModalBody>
          <Grid>
            <Row>
              <Col sm={7} md={7} lg={7} className="light-grey pad-zero">
                <AdImage imageURL={imageURL} markupURL={markupURL} markupClick={this.markupClick} networkClick={this.networkClick}/>
              </Col>
              <Col sm={5} md={5} lg={5} className="info-col">
                <i className="fa fa-times marg-t-sm marg-r-sm pull-right" role="button" onClick={this.close}></i>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </BSModalBody>
      </BSModalDialog>
    );
  }
}

export default AdModal;
