import AdModalActions from '../actions/AdModalActions';

const initialState = {
  adModalIsShowing: false,
  adInfoIsShowing: true,
  adReasonsIsShowing: false
};

function AdModalReducer(state = initialState, action = null) {
  switch (action.type) {
    case AdModalActions.HIDE_AD_MODAL:
      return Object.assign({}, state, {
        adModalIsShowing: false
      });
    case AdModalActions.SHOW_AD_MODAL:
      return Object.assign({}, state, {
        adModalIsShowing: true
      });
    case AdModalActions.SHOW_AD_INFO:
      return Object.assign({}, state, {
        adInfoIsShowing: true,
        adReasonsIsShowing: false
      });
    case AdModalActions.SHOW_AD_REASONS:
      return Object.assign({}, state, {
        adInfoIsShowing: false,
        adReasonsIsShowing: true
      });
    default:
      return state;
  }
}

export default AdModalReducer;
