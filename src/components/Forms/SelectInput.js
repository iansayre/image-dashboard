/**
 * Created by chetanv on 05/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSSelectInput from '../../bootstrap/BSSelectInput.js';

class SelectInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,

    size: PropTypes.oneOf(['small', 'default', 'large', null]),

    disabled: PropTypes.bool,

    validState: PropTypes.oneOfType([
      PropTypes.oneOf([null, 'success', 'warning', 'error']),
      PropTypes.func
    ]),

    value: PropTypes.string,
    onChange: PropTypes.func,
    valueLink: PropTypes.shape({
      value: PropTypes.string.isRequired,
      requestChange: PropTypes.func.isRequired
    }),

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
    onChange: null,
    valueLink: null,

    choices: [{ id: -1, displayName: '- Select an option -' }]
  };

  getOnChangeHandler() {
    return this.props.valueLink ?
      this.props.valueLink.requestChange :
      this.props.onChange;
  }


  render() {
    const { value, onChange, valueLink, ... bsProps } = this.props;
    const inputValue = valueLink ? valueLink.value : value;
    const changeHandler = valueLink ? valueLink.requestChange : onChange;

    return (
      <BSSelectInput {...bsProps} value={inputValue} onChange={changeHandler} />
    );
  }
}

export default SelectInput;
