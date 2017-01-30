/**
 * Created by PankajK1 on 11/30/2015.
 */

import React, { PropTypes, Component } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';
import DomUtil from '../utils/DomUtil.js';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../styles/vendors/bootstrap/BSTagsInput.css';

class BSTagsInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    allowedTags: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.object),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,

    size: PropTypes.oneOf(['small', 'medium', 'large', null]),


    validState: PropTypes.oneOfType([
      PropTypes.oneOf([null, 'success', 'warning', 'error']),
      PropTypes.func,
    ]),
  };
  static defaultProps = {
    label: 'Input Label',
    hideLabel: false,
    allowedTags: [],
    onChange: () => {
    },
    value: [],
    validState: null,
    disabled: false,
    size: 'small'
  };

  constructor(props) {
    super(props);
    // The new class syntax for creating components does not auto-bind callback
    // functions passed to child components
    // Too bad :(
    this.tagInputId = DomUtil.generateId();
  }

  render() {
    const wrapperClass = classnames(
      BSUtils.formGroupClass,
      BSUtils.getValidFormGroupClass(this.props.validState)
    );

    return (
      <div className={wrapperClass}>
        {this.renderLabel()}
        {this.renderTagInput()}
      </div>
    );
  }

  renderLabel() {
    const labelClass = classnames(
      BSUtils.formControlLabelClass,
      {'sr-only': this.props.hideLabel}
    );

    return (
      <label className={labelClass} htmlFor={this.tagInputId}>
        {this.props.label}
      </label>
    );
  }

  renderTagInput() {

    const tagInputClass = classnames(
      BSUtils.formControlClass,
      BSUtils.getFormControlSizeClass(this.props.size),
      BSUtils.getValidFormControlClass(this.props.validState),
      this.props.disabled ? "disabled" : ""
    );

    return (
      <Select options={this.props.value} multi className={tagInputClass}
              disabled={this.props.disabled}
              placeholder={this.props.placeholder}/>
    );
  }
}

export default BSTagsInput;
