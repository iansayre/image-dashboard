'use strict';

/**
  * Form Component
  @Params {}
  @RETURNS A form component
  @AUTHOR Ian Sayre
*/

import React, { Component, PropTypes} from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';

class Form extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static PropTypes = {
    onSubmit: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    onSubmit: emptyFunction,
    className: null
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render(){
    return (
      <form className={this.props.className} onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;

