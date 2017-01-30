/**
 * Created by chetanv on 04/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSTextInput from '../../bootstrap/BSTextInput.js';
import emptyFunction from 'fbjs/lib/emptyFunction';

class TextInput extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    placeholder: PropTypes.string,

    type: PropTypes.oneOf([
      'text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time',
      'week', 'number', 'email', 'url', 'search', 'tel', 'color'
    ]),

    size: PropTypes.oneOf(['small', 'medium', 'large', null]),

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

  render() {
    const { value, onChange, valueLink, ... bsProps } = this.props;
    const inputValue = valueLink ? valueLink.value : value;
    const changeHandler = valueLink ? valueLink.requestChange : onChange;

    return (
      <BSTextInput {...bsProps} value={inputValue} onChange={changeHandler} />
    );
  }
}

export default TextInput;
