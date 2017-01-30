/**
 * Created by PankajK1 on 11/30/2015.
 */

import React, { PropTypes, Component } from 'react';
import Select from 'react-select' ;
import BSTagsInput from '../../bootstrap/BSTagsInput.js';

class TagsInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    allowedTags: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.object),
    size: PropTypes.oneOf(['small', 'medium', 'large', null])
     };

  static defaultProps = {
    label: 'Input Label',
    hideLabel: false,
    allowedTags: [],
    onChange: null,
    value: [],
    size: 'small'
     };

  render() {

    return (
      <BSTagsInput {...this.props} />
    );
  }
}

export default TagsInput;
