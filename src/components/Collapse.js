/* @RETURNS Collapse div containing a Button and Collapse component
 * @AUTHOR Ian Sayre 09/13/16
 */


import React, { Component, PropTypes } from 'react';
import jQuery from 'jQuery';
import BSUtils from '../utils/BootstrapUtils.js';
import BSCollapse from '../bootstrap/BSCollapse';
import Button from './Button';

class Collapse extends Component {
  static propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    buttonLabel: PropTypes.node,
    collapseClick: PropTypes.func,
    collapseLabel: PropTypes.string,
    collapseTarget: PropTypes.string.isRequired
  };
  static defaultProps = {
    buttonType: 'primary',
    buttonLabel: 'Collapse Button',
    collapseClick: () => {},
    collapseLabel: 'Collapse Label',
    collapseTarget: 'collapse-block'
  };

  constructor(props) {
    super(props);
    this.collapseClick = this.collapseClick.bind(this);
  }

  collapseClick() {
    jQuery('.collapse').collapse('toggle')
  }

  render() {
    const { buttonType, buttonLabel, collapseLabel, collapseTarget, children } = this.props;

    return(
      <div className="collapse-container">
        <span className={BSUtils.formControlLabelClass}>{collapseLabel}</span>
        <div className="col-xs-8">
          <Button className="collapse-btn" label={buttonLabel} type={buttonType} data-toggle="collapse" data-target={'#' + collapseTarget} onClick={this.collapseClick}/>
        </div>
        <BSCollapse collapseId={collapseTarget}>
          {children}
        </BSCollapse>
      </div>
    );
  }

}
export default Collapse;
