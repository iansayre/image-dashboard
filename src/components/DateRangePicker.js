/**
 * Created by chetanv on 25/11/15.
 */
import React, { Component, PropTypes } from 'react';
import BSDateRangePicker from '../bootstrap/BSDateRangePicker.js';
import {checkMomentProp} from '../utils/PropertyValidators.js';
import moment from 'moment';

const momentToday = () => moment();
const momentYesterday = () => moment().subtract(1, 'd');
const momentBefore7Days = () => moment().subtract(7, 'd');
const momentBefore30Days = () => moment().subtract(30, 'd');
const momentThisMonthStart = () => moment().set('date', 1);
const momentLastMonthStart = () => moment().set('date', 1).subtract(1, 'M');
const momentLastMonthEnd = () => moment().set('date', 1).subtract(1, 'd');

class DateRangePicker extends Component {

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
    ranges: {
      'Today': [momentToday(), momentToday()],
      'Yesterday': [momentYesterday(), momentYesterday()],
      'Last 7 Days': [momentBefore7Days(), momentToday()],
      'Last 30 Days': [momentBefore30Days(), momentToday()],
      'This Month': [momentThisMonthStart(), momentToday()],
      'Last Month': [momentLastMonthStart(), momentLastMonthEnd()]
    },
    opens: 'left'
  };

  render() {
    return(
      <BSDateRangePicker {...this.props} />
    );
  }
}

export default DateRangePicker;
