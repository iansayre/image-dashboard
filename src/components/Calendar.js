import React, { Component, PropTypes } from 'react';
import DayPicker from 'react-day-picker';

class Calendar extends Component {
  static proTypes = {
    onDayClick: PropTypes.func,
    numberOfMonths: PropTypes.number,
    selectedDays: PropTypes.func
  };
  static defaultProps = {
    onDayClick: () => {},
    numberOfMonths: 1,
    selectedDays: () => {}
  };

  render() {

    return (
      <DayPicker ref="daypicker" enableOutsideDays {...this.props}/>
    );
  }
}

export default Calendar;
