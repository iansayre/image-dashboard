/*
 * AD CARD COMPONENT
 * @AUTHOR Ian Sayre 07/11/16
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class AdCard extends Component {
  static propTypes = {
    creativeID: PropTypes.string.isRequired,
    bidder: PropTypes.string.isRequired,
    adSize: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    networkCalls: PropTypes.arrayOf(PropTypes.string),
    iabCatagories: PropTypes.array,
    adStatus: PropTypes.oneOf([-1, 0, 1, 2, 3, 4]),
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  constructor(props) {
    super(props);
    this.onClick = this.props.onClick.bind(this)
  }

  renderAdImage(adSize, adStatus, imageURL) {
    const dimmensions = adSize.split('x');
    const size = {width: Number(dimmensions[0]), height: Number(dimmensions[1])};

    let imageClass = '';

    if (size.height <= 100 || size.width <= 100) {
      imageClass = 'center';
    }
    else {
      imageClass = 'center-block';
    }

    const classes = classnames(
      imageClass,
      'img-fluid',
    );

    if (adStatus === 1 || adStatus === 2 || adStatus === 4) {
      return (
        <div className="ad-image">
          <div className="fade-overlay opacity-70"/>
          <img className={classes} src={imageURL}/>
        </div>
      );
    }

    if (!imageURL) {
      return (
        <div className="ad-image">
          <div className='center dead-face'>😲</div>
        </div>
      );
    }

    return (
      <div className="ad-image">
        <img className={classes} src={imageURL}/>
      </div>
    );
  }

  renderBidder(adStatus, bidder) {
    if (adStatus === 1 || adStatus === 2 || adStatus === 4) {
      return (
        <span className="bidder blocked-ad">{bidder}</span>
      );
    }

    return (
      <span className="bidder">{bidder}</span>
    );
  }


  render() {
    const { bidder, adSize, adStatus, imageURL } = this.props;
    return (
      <div className='card ad-card pad-xs clearfix' onClick={this.onClick}>
        {this.renderAdImage(adSize, adStatus, imageURL)}
        <div className="ad-info pad-sm">
         {this.renderBidder(adStatus, bidder)}
        </div>
      </div>
    );
  }
}

export default AdCard;
