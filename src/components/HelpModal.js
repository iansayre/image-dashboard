/* @RETURNS HELP Modal Component
 * @AUTHOR Ian Sayre 08/10/16
 */


import React, { Component, PropTypes } from 'react';
import BSModalDialog from '../bootstrap/BSModalDialog';
import BSModalBody from '../bootstrap/BSModalBody';
import Grid from './Layout/Grid';
import Row from './Layout/Row';



class HelpModal extends Component {
  static propTypes = {
    close: PropTypes.func,
    iFrameURL: PropTypes.string,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.close()
  }

  render() {
    const { iFrameURL, show } = this.props;
    return (
      <BSModalDialog show={show} className="help-modal">
        <BSModalBody>
          <Grid>
          <Row>
              <div>
                <h4 className="pull-left marg-t-sm marg-l-sm">Help</h4>
                <i className="fa fa-times marg-t-sm marg-r-sm pull-right" role="button" onClick={this.close}></i>
              </div>
            </Row>
            <Row>
              <iframe height="600" width="1058" id="help-frame" src={iFrameURL}>
              </iframe>
            </Row>
          </Grid>
        </BSModalBody>
      </BSModalDialog>
    );
  }
}

export default HelpModal;
