/* @RETURNS Markup Modal Component
 * @AUTHOR Ian Sayre 08/10/16
 */


import React, { Component, PropTypes } from 'react';
import BSModalDialog from '../bootstrap/BSModalDialog';
import BSModalBody from '../bootstrap/BSModalBody';
import Grid from './Layout/Grid';
import Row from './Layout/Row';



class MarkupModal extends Component {
  static propTypes = {
    adMarkup: PropTypes.string,
    close: PropTypes.func,
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
    const { adMarkup, show } = this.props;
    return (
      <BSModalDialog show={show} className="markup-modal">
        <BSModalBody>
          <Grid>
            <Row>
              <div>
                <h4 className="pull-left marg-t-sm marg-l-sm">Markup</h4>
                <i className="fa fa-times marg-t-sm marg-r-sm pull-right" role="button" onClick={this.close}></i>
              </div>
            </Row>
            <Row>
              <div className="border-t pad-md">
                <div className="markup-container">
                  {adMarkup}
                </div>
              </div>
            </Row>
          </Grid>
        </BSModalBody>
      </BSModalDialog>
    );
  }
}

export default MarkupModal;
