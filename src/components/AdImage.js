/* @RETURNS Ad Image component
 * @AUTHOR Ian Sayre 08/01/16
 */

import React, { Component, PropTypes } from 'react';
import AdModalFooter from './AdModalFooter';


class AdImage extends Component {
  static propTypes = {
    imageURL: PropTypes.string,
    markupURL: PropTypes.string,
    markupClick: PropTypes.func,
    networkClick: PropTypes.func
  };

  static defaultProps = {
    markupClick: () => {},
    networkClick: () => {}
  };

  constructor(props) {
    super(props);
    this.markupClick = this.markupClick.bind(this);
    this.networkClick = this.networkClick.bind(this);
  }

  markupClick() {
    this.props.markupClick();
  }

  networkClick() {
    this.props.networkClick();
  }

  renderImage() {
     if (!this.props.imageURL) {
      return (<div className='center dead-face'>😲</div>);
    }

    return (<img className="center img-fluid" src={this.props.imageURL}/>);
  }

  render() {
    return (
      <section className="modal-image">
        <div className="modal-image-container">
          {this.renderImage()}
          <AdModalFooter adLink={this.props.markupURL} markupClick={this.markupClick} networkClick={this.networkClick} />
        </div>
      </section>
    );
  }
}

export default AdImage;
