/**
 * Created by chetanv on 23/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';
import DomUtil from '../utils/DomUtil.js';

class BSSelectInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,

    size: PropTypes.oneOf(['small', 'default', 'large', null]),

    disabled: PropTypes.bool,

    validState: PropTypes.oneOf([null, 'success', 'warning', 'error']),

    value: PropTypes.string,
    onChange: PropTypes.func,

    choices: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
      ]).isRequired,
      displayName: PropTypes.string.isRequired
    }).isRequired).isRequired,
    className: PropTypes.string
  };

  static defaultProps = {

    label: 'Select Label',
    hideLabel: false,
    placeholder: null,
    type: 'text',

    size: null,

    disabled: false,
    validState: null,

    value: '',
    onChange: () => {},

    choices: [{ id: -1, displayName: '- Select an option -' }]
  };

  constructor(props) {
    super(props);
    // The new class syntax for creating components does not auto-bind functions
    // Too bad :(
    this.handleBSChange = this.handleBSChange.bind(this);
    this.selectId = DomUtil.generateId();
  }

  handleBSChange() {
    this.props.onChange(this.refs.select.value);
  }

  renderLabel() {
    const labelClass = classnames(
      BSUtils.formControlLabelClass,
      {'sr-only': this.props.hideLabel}
    );

    return (
      <label className={labelClass} htmlFor={this.selectId}>
        {this.props.label}
      </label>
    );
  }

  renderSelectField() {
    const selectClass = classnames(
      BSUtils.formControlClass,
      BSUtils.getFormControlSizeClass(this.props.size),
      BSUtils.getValidFormControlClass(this.props.validState)
    );

    return (
      <div className="col-xs-8">
        <select className={selectClass} id={this.selectId} ref="select"
                disabled={this.props.disabled} onChange={this.handleBSChange}
                value={this.props.value} >
          {this.renderOptions()}
        </select>
      </div>
    );
  }

  renderOptions() {
    return this.props.choices.map(
        choice =>
        <option key={choice.displayName} value={choice.id}>
          {choice.displayName}
        </option>
    );
  }

  render() {
    const wrapperClass = classnames(
      BSUtils.formGroupClass,
      BSUtils.getValidFormGroupClass(this.props.validState),
      this.props.className
    );

    return (
      <div className={wrapperClass}>
        {this.renderLabel()}
        {this.renderSelectField()}
      </div>
    );
  }
}

export default BSSelectInput;
