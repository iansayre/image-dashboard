/**
 * Created by chetanv on 26/11/15.
 */

import React, { Component, PropTypes } from 'react';
import BSTextInput from './BSTextInput.js';
import DOMUtil from '../utils/DomUtil.js';
import moment from 'moment';

import {checkMomentProp} from '../utils/PropertyValidators.js';

class BSDateRangePicker extends Component {

  static propTypes = {
    onDateRangeChange: PropTypes.func,
    from: checkMomentProp,
    to: checkMomentProp,
    compact: PropTypes.bool,
    ranges: PropTypes.objectOf(PropTypes.arrayOf(checkMomentProp)),
    opens: PropTypes.oneOf(['left', 'right'])
  };

  static defaultProps = {
    onDateRangeChange: () => {},
    from: moment(),
    to: moment(),
    compact: false,
    ranges: null,
    opens: 'left'
  };


  constructor(props) {
    super(props);
    this.dateRangePicker = null;
  }

  render() {
    const { from, to } = this.props;

    return (
      <span ref="dateRangePicker">
        <span ref="dateRange">{this.dateFormatter(from)} - {this.dateFormatter(to)}</span>&nbsp;
      </span>
    )
  }

  componentDidMount() {
    this.dateRangePicker = jQuery(this.refs.dateRangePicker);
    this.dateRangePicker.daterangepicker({
      ranges: this.props.ranges,
      startDate: this.props.from,
      endDate: this.props.to,
      opens: this.props.opens
    }, this.props.onDateRangeChange);
  }

  componentWillUnmount() {
    this.dateRangePicker.data('daterangepicker').remove();
  }

  dateFormatter(date) {

    if(this.props.compact) {
      return moment(date).format('MMM DD');
    }
    return moment(date).format('ll');
  };
}

export default BSDateRangePicker;
