/**
 * Created by chetanv on 17/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSCheckboxInput from '../../bootstrap/BSCheckboxInput';

class CheckboxInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,

    disabled: PropTypes.bool,

    validState: PropTypes.oneOfType([
      PropTypes.oneOf([null, 'success', 'warning', 'error']),
      PropTypes.func
    ]),

    onChange: PropTypes.func,
    checkedLink: PropTypes.shape({
      value: PropTypes.bool.isRequired,
      requestChange: PropTypes.func.isRequired
    }),

    checked: PropTypes.bool
  };

  static defaultProps = {

    label: 'Checkbox Label',
    hideLabel: false,
    placeholder: null,
    type: 'text',


    disabled: false,
    validState: null,

    onChange: () => {},
    value: null,

    checked: false,
    checkedLink: null
  };

  render() {

    const { checked, onChange, checkedLink, ...bsProps } = this.props;
    const isChecked = checkedLink ? checkedLink.value : checked;
    const changeHandler = checkedLink ? checkedLink.requestChange : onChange;

    return (
      <BSCheckboxInput {...bsProps} checked={isChecked} onChange={changeHandler} />
    );
  }

}

export default CheckboxInput;
