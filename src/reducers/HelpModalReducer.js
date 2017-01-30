import HelpModalActions from '../actions/HelpModalActions';

const initialState = {
  helpLink: ''
}

const HelModalReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case HelpModalActions.SHOW_HELP_MODAL:
      return Object.assign({}, state, {
        helpLink: action.payload.helpLink,
        helpModalIsShowing: action.payload.helpModalIsShowing
      })
    default:
      return state;
  }
}

export default HelModalReducer;
