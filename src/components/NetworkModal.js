/* @RETURNS Network Modal
 * @AUTHOR Ian Sayre 08/10/16
 */

import React, { Component, PropTypes } from 'react';
import BSModalDialog from '../bootstrap/BSModalDialog';
import BSModalBody from '../bootstrap/BSModalBody';
import Button from './Button';
import Grid from './Layout/Grid';
import Row from './Layout/Row';
import Col from './Layout/Col';

class NetworkModal extends Component {
  static propTypes = {
    close: PropTypes.func,
    networkCalls: PropTypes.array,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.close();
  }

  render() {
    const { show, networkCalls } =  this.props;

    let totalTime = 0;

    const renderCalls = networkCalls.map((call, i) => {
      totalTime += call.time;

      let callString;

      if (call.request.url.length > 96) {
        callString = call.request.url.substring(0, 96) + '...';
      }
      else {
        callString = call.request.url;
      }

      return (
        <Row key={i}>
          <Col sm={1} md={1} lg={1}>
            <Button block={false} className="clearfix pull-left" label={call.request.method} type="secondary"/>
          </Col>
          <Col sm={10} md={10} lg={10} >
            <div className="calls">{callString}</div>
          </Col>
          <Col sm={1} md={1} lg={1}>
            <span className="pull-right request-time">{call.time} msec</span>
          </Col>
        </Row>
      );
    });


    return (
      <BSModalDialog show={show} className="network-modal">
        <BSModalBody>
          <Grid>
            <Row>
              <div>
                <h4 className="pull-left marg-t-sm marg-l-sm">Network Calls</h4>
                <i className="fa fa-times marg-t-sm marg-r-sm pull-right" role="button" onClick={this.close}></i>
              </div>
            </Row>
            <Row>
              <div className="border-t pad-md">
                <span className="marg-b-md pull-left request-count">{networkCalls.length} Requests</span>
                <span className="marg-b-md pull-right request-time">{totalTime} msec</span>
              </div>
            </Row>
            <Row>
              <div className="pad-r-md pad-b-md pad-l-md render-calls">
                <Grid>
                  {renderCalls}
                </Grid>
              </div>
            </Row>
          </Grid>
        </BSModalBody>
      </BSModalDialog>
    );
  }
}


export default NetworkModal;
