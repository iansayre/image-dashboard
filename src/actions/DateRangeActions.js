const DAY_CLICK = 'DAY_CLICK';
const RESET_DATE_RANGE = 'RESET_DATE_RANGE';

function dayClick(day) {
  return {
    type: DAY_CLICK,
    payload: day
  }
}

function resetClick() {
  return {
    type: RESET_DATE_RANGE
  }
}

export default {
  DAY_CLICK,
  RESET_DATE_RANGE,
  dayClick,
  resetClick
}
