import DateRangeActions from '../actions/DateRangeActions';
import { DateUtils } from 'react-day-picker';

const initialState = {
  from: null,
  to: null
}

function DateRangeReducer(state = initialState, action = null) {
  switch (action.type) {
    case DateRangeActions.DAY_CLICK:
      const range = DateUtils.addDayToRange(action.payload, state);
      return Object.assign({}, state, range);
    case DateRangeActions.RESET_DATE_RANGE:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

export default DateRangeReducer;
