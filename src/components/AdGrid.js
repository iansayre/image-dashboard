/*
 * Ad Grid Component
 * @AUTHOR Ian Sayre 07/11/16
 * @TODO: RESTRUCTURE EVERYTHING TO USE REDUX TO HANDLE STATE IN THE STORE!!!!
 */


import React, { Component } from 'react';

class AdGrid extends Component {

  static propTypes = {};

  static defaultProps = {};

  render() {

    return(
      <div className={'ad-grid pad-t-lg pad-l-lg pad-r-zero'} data-masonry='{"itemSelector": ".grid-item", "columnWidth": 200}'>
        {this.props.children}
      </div>
    );
  }

}

export default AdGrid;
