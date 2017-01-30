/**
 * Created by chetanv on 23/11/15.
 */

/**
 * A wrapper around bootstrap input fields
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';
import DomUtil from '../utils/DomUtil.js';
import emptyFunction from 'fbjs/lib/emptyFunction';


class BSTextInput extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    srOnly: PropTypes.bool,
    placeholder: PropTypes.string,

    type: PropTypes.oneOf([
      'text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time',
      'week', 'number', 'email', 'url', 'search', 'tel', 'color'
    ]),

    size: PropTypes.oneOf(['small', 'medium', 'large', null]),

    disabled: PropTypes.bool,

    validState: PropTypes.oneOf([null, 'success', 'warning', 'error']),

    value: PropTypes.string,
    onChange: PropTypes.func,

    leftAddOn: PropTypes.node,
    rightAddOn: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    label: 'Input Label',
    hideLabel: false,
    placeholder: null,
    type: 'text',

    size: 'small',

    disabled: false,
    validState: null,

    value: '',
    onChange: emptyFunction,
    valueLink: null,

    leftAddOn: null,
    rightAddOn: null
  };

  constructor(props) {
    super(props);
    // The new class syntax for creating components does not auto-bind callback
    // functions passed to child components
    // Too bad :(
    this.handleBSChange = this.handleBSChange.bind(this);
    this.inputId = DomUtil.generateId();
  }

  handleBSChange() {
    this.props.onChange(this.refs.input.value);
  }

  render() {
    const wrapperClass = classnames(
      BSUtils.formGroupClass,
      BSUtils.getValidFormGroupClass(this.props.validState),
      this.className
    );

    return (
      <div className={wrapperClass}>
        {this.renderLabel()}
        {this.renderInput()}
      </div>
    );
  }

  renderLabel() {
    const labelClass = classnames(
      BSUtils.formControlLabelClass,
      {'sr-only': this.props.hideLabel}
    );

    return (
      <label className={labelClass} htmlFor={this.inputId}>
        {this.props.label}
      </label>
    );
  }

  renderInputField() {
    const inputClass = classnames(
      BSUtils.formControlClass,
      BSUtils.getFormControlSizeClass(this.props.size),
      BSUtils.getValidFormControlClass(this.props.validState)
    );

    return (
      <div className="col-xs-8 offset-2">
        <input
          type={this.props.type}
          className={inputClass}
          id={this.inputId}
          ref="input"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          onChange={this.handleBSChange}
          value={this.props.value}/>
      </div>
    );
  }

  renderInput() {
    let leftAddOn = null;
    let rightAddOn = null;

    const inputField = this.renderInputField();

    if (!this.props.leftAddOn && !this.props.rightAddOn) {
      return inputField;
    }

    if (this.props.leftAddOn) {
      leftAddOn =
        <span className={BSUtils.inputGroupAddOnClass}>{this.props.leftAddOn}</span>;
    }

    if (this.props.rightAddOn) {
      rightAddOn =
        <span className={BSUtils.inputGroupAddOnClass}>{this.props.rightAddOn}</span>;
    }

    return (
      <div className={BSUtils.inputGroupClass}>
        {leftAddOn}
        {inputField}
        {rightAddOn}
      </div>
    );
  }
}

export default BSTextInput;
