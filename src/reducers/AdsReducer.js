/*
  * @RETURNS Ad Reducer
  * @AUTHOR Ian Sayre
  */

import AdsActions from '../actions/AdsActions';
import harUtil from '../utils/harUtil';

const initialState = {
  isFetching: false,
  ads: [],
  adToRender: null,
  errorMessage: null,
  focusedAd: {},
  networkCalls: []
};

function AdsReducer(state = initialState, action = null) {
  switch(action.type) {
    case AdsActions.REQUEST_ADS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case AdsActions.RECEIVE_ADS:
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
        ads: action.payload.ads
      });
    case AdsActions.RECEIVE_AD_MARKUP:
      return Object.assign({}, state, {
        adToRender: action.payload
      });
    case AdsActions.RECEIVE_ADS_FALURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message
      });
    case AdsActions.SET_FOCUS_AD:
      return Object.assign({}, state, {
        focusedAd: action.payload
      });
    case AdsActions.RECEIVE_NETWORK_CALLS:
      return Object.assign({}, state, {
        networkCalls: harUtil(action.payload)
      });
    case AdsActions.UPDATE_AD:
      const newAdsState = state.ads.map(ad =>
        ad.creativeId === action.payload.creativeId ?
          Object.assign({}, ad, {
            reason: action.payload.reason,
            status: action.payload.status
          }) :
          ad
      );

      const newFocusedAd = Object.assign({}, state.focusedAd, {
        reason: action.payload.reason,
        status: action.payload.status
      });

      return Object.assign({}, state, {
        ads: newAdsState,
        focusedAd: newFocusedAd
      });
    default:
      return state;
  }
}

export default AdsReducer;
