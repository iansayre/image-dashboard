/**
  * Linking Component
  * @AUTHOR Ian Sayre & chetanv
  * 19/11/15
*/

'use strict';

import React, { Component, PropTypes } from 'react';
import Location from '../utils/LocationUtil.js';

class Link extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    query: PropTypes.object,
    state: PropTypes.object,
    onClick: PropTypes.func,
  };

  static handleClick = (event) => {
    let allowTransition = true,
        clickResult;

    if (this.props && this.props.onClick) {
      clickResult = this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (clickResult === false || event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    if (allowTransition) {
      const link = event.currentTarget;
      Location.pushState(
        this.props && this.props.state || null,
        this.props && this.props.to || (link.pathname + link.search)
      );
    }
  };

  render() {
    const { to, query, ...props } = this.props;
    return ( <a href={Location.createHref(to, query)} onClick={Link.handleClick.bind(this)} {...props}/> );
  }
}

export default Link;
