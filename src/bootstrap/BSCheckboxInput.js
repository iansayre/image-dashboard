/**
 * Created by chetanv on 23/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';

class BSCheckboxInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    validState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    label: 'Checkbox Label',
    hideLabel: false,
    placeholder: null,
    type: 'text',
    disabled: false,
    validState: null,
    onChange: () => {},
    checked: false,
    value: null
  };

  constructor(props) {
    super(props);
    this.handleBSChange = this.handleBSChange.bind(this);
  }

  handleBSChange() {
    this.props.onChange(this.refs.checkbox.checked);
  }

  renderCheckbox() {
    return (
      <div className={classnames(BSUtils.checkboxClass, this.props.className)}>
        <label>
          <input type="checkbox" checked={this.props.value || this.props.checked} ref="checkbox"
                 onChange={this.handleBSChange} disabled={this.props.disabled}/>
          {this.props.label}
        </label>
      </div>
    );
  }

  render() {
    const checkbox = this.renderCheckbox();
    if (this.props.validState) {
      return (
        <div className={BSUtils.getValidFormGroupClass(this.props.validState)}>
          {checkbox}
        </div>
      );
    }

    return checkbox;
  }

}

export default BSCheckboxInput;
