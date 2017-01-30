import AlertActions from '../actions/AlertActions';

const initialState = {
  alert: {
    label: '',
    message: '',
    type: 'info'
  },
  alertModalIsShowing: false
};

function AlertReducer(state = initialState, action = null) {
  switch(action.type) {
    case AlertActions.RENDER_ALERT:
      return Object.assign({}, state, {
        alert: {
          label: action.payload.label,
          message: action.payload.message,
          type: action.payload.type
        }
      });
    case AlertActions.SHOW_ALERT_MODAL:
      return Object.assign({}, state, {
        alertModalIsShowing: action.payload
      });
    case AlertActions.HIDE_ALERT_MODAL:
      return Object.assign({}, state, {
        alertModalIsShowing: action.payload
      });
    default:
      return state;
  }
}

export default AlertReducer;
