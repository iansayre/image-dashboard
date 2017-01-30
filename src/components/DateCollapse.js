/* @RETURNS Sidebar Date Range Collapse Menu
 * @AUTHOR Ian Sayre 09/13/16
 */

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DateRangeActions from '../actions/DateRangeActions';
import { DateUtils } from 'react-day-picker';
import Button from './Button';
import Calendar from './Calendar';
import Collapse from './Collapse';
import SelectInput from './Forms/SelectInput';

const momentToday  = () => moment().format();
const momentLast7  = () => moment().subtract(7, 'd').format();
const momentLast30 = () => moment().subtract(30, 'd').format();
const momentTodayDate   =  moment(momentToday()).toDate();
const momentLast7Date   =  moment(momentLast7()).toDate();
const momentLast30Date  =  moment(momentLast30()).toDate();

class DateCollapse extends Component {
  static propTypes = {
    dayClick: PropTypes.func,
    from: PropTypes.object,
    to: PropTypes.object,
    rangeChange: PropTypes.func,
    resetClick: PropTypes.func
  };
  static defaultProps = {
    dayClick: () => {},
    rangeChange: () => {},
    resetClick: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      displayName: 'custom',
      displayRange: 'Today'
    };
    this.dayClick = this.dayClick.bind(this);
    this.rangeChange = this.rangeChange.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  changeRangeDisplay() {
    const { from, to } = this.props;

    if (!from && !to) {
      this.setState({
       displayRange: 'Today'
      });
    }
    else if (from === to) {
      this.setState({
        displayRange: moment(from).format('YYYY-MM-DD')
      });
    }
    else if (from && !to) {
      this.setState({
        displayRange: moment(from).format('YYYY-MM-DD')
      });
    }
    else if (!from && to) {
      this.setState({
        displayRange: moment(to).format('YYYY-MM-DD')
      })
    }
    else {
      this.setState({
        displayRange: (moment(from).format('YYYY-MM-DD') + ' - ' + moment(to).format('YYYY-MM-DD'))
      });
    }
  }

  dayClick(e, day) {
    const { dispatch } = this.props;
    dispatch(DateRangeActions.dayClick(day));
    this.showDateReset();
    this.changeRangeDisplay();
  }

  rangeChange(range) {

    if (range === 'today') {
      this.dayClick(this, momentTodayDate);
      this.dayClick(this, momentTodayDate);
    }
    else if (range === 'last 7') {
      this.dayClick(this, momentLast7Date);
      this.dayClick(this, momentTodayDate);
    }
    else if (range === 'last 30') {
      this.dayClick(this, momentLast30Date);
      this.dayClick(this, momentTodayDate);
    }

    this.setState({
      displayName: range
    });
  }

  resetClick() {
    const { dispatch } = this.props;
    const resetBtn = document.getElementById('reset-range');

    dispatch(DateRangeActions.resetClick());

    this.setState({
      displayName: 'custom',
      displayRange: 'Today'
    })

    resetBtn.classList += ' hide';
  }

  showDateReset() {
    const resetBtn = document.getElementById('reset-range');

    if (resetBtn.classList.contains('hide')) {
      resetBtn.classList.remove('hide');
    }
  }

  render() {
    const dayChoices = [
      {id: 'custom', displayName: 'Custom'},
      {id: 'today', displayName: 'Today'},
      {id: 'last 7', displayName: 'Last 7 Days'},
      {id: 'last 30', displayName: 'Last 30 Days'}
    ];

    const { from, to } = this.props;

    const rangeLabel = () => {
      return (
        <span>{this.state.displayRange}<i className="fa fa-calendar pull-right" aria-hidden="true"></i></span>
      )
    }


    return(
      <Collapse buttonType="secondary" buttonLabel={rangeLabel()} collapseClick={this.toggleCollapseClick} collapseLabel="Date Range" collapseTarget="calendar-collapse">
        <div className="pad-t-lg pad-r-xs pad-b-lg pad-l-xs">
          <SelectInput className="pad-t-md pad-r-xs pad-l-xs" choices={dayChoices} value={this.state.displayName} onChange={this.rangeChange} />
          <p className="flag-reason pad-l-md">If picking a range of a single day, click the date twice to set range</p>
          <Calendar selectedDays={day => DateUtils.isDayInRange(day, { from, to })} onDayClick={this.dayClick} />
          <div className="range-submit-container pad-t-md">
            <Button className="clearfix hide reset-btn" id="reset-range" type="secondary" label="Reset" onClick={this.resetClick} />
          </div>
        </div>
      </Collapse>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    from: state.adFilter.filter.dateRange.from,
    to: state.adFilter.filter.dateRange.to
  };
}
export default connect(mapStateToProps)(DateCollapse);
