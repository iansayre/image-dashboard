/**
 * Bootstrap Carousel Item Component
 * @AUTHOR Ian Sayre
 * @CREATED 01/13/2015
 */

import React, { Component, PropTypes, Children } from 'react';
import ReactDOM from 'react-dom';
import BSUtils from '../utils/BootstrapUtils.js';
import classnames from 'classnames';

class BSCarouselItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    animateIn: PropTypes.bool,
    animateOut: PropTypes.bool,
    caption: PropTypes.node,
    direction: PropTypes.oneOf(['prev', 'next']),
    index: PropTypes.number,
    onAnimateOutEnd: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    animateIn: false,
    animateOut: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      direction: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.active && prevProps.active) {
      ReactDOM.findDOMNode(this),
      this.handleAnimationOutEnd;
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  }

  handleAnimationOutEnd() {
    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  }

  startAnimation() {
    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left',
    });
  }

  renderCaption(caption) {
    const classes = className(
      BSUtils.carouselCaptionClass,
      this.props
    );
    return (
      <div className={classes}>
        {caption}
      </div>
    );
  }

  render() {
    const { active, animateIn, animateOut, caption, direction, index, onAnimateOutEnd, ...other } = this.props;

    const classes = classnames(
      BSUtils.carouselItemClass,
      {
        active: active && !animateIn || animateOut,
        next: active && animateIn && direction === 'next',
        prev: active && animateIn && direction === 'prev',
      },
    );

    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
        {caption ? this.renderCaption(caption) : null}
      </div>
    );
  }
}

export default BSCarouselItem;
