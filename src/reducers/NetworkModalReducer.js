import NetworkModalActions from '../actions/NetworkModalActions';

const initialState = {
  networkModalIsShowing: false
}

const NetworkModalReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case NetworkModalActions.SHOW_NETWORK_MODAL:
      return Object.assign({}, state, {
        networkModalIsShowing: action.payload
      })
    case NetworkModalActions.HIDE_NETWORK_MODAL:
      return Object.assign({}, state, {
        networkModalIsShowing: action.payload
      })
    default:
      return state;
  }
}

export default NetworkModalReducer;
