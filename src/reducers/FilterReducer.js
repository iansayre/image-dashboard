/* @RETURNS Ad filter reducer
 * @AUTHOR Ian Sayre 10/5/16
 */

import { combineReducers } from 'redux';
import FilterActions from '../actions/FilterActions';

import DateRangeReducer from './DateRangeReducer';

const initialFormState = {
  adType: '',
  bidder: {
    isFetching: false,
    selectedBidder: '',
    bidders: []
  },
  creativeId: '',
  deviceId: '',
  deviceTypes: {
    isFetching: false,
    selectedType: '',
    types: []
  },
  domainValue: '',
  iabValue: '',
  statusValue: '',
  locationState: '',
  locationCountry: '',
  locationDMA: '',
  locationCity: '',
  locationZip: ''
};

const initialRequestState = {
  request: ''
};

function FormReducer(state = initialFormState, action = null) {
  switch (action.type) {
    case FilterActions.AD_TYPE_CHANGE:
      return Object.assign({}, state, {
        adType: action.payload
      });
    case FilterActions.BIDDER_CHANGE:
      return Object.assign({}, state, {
        bidder: {
          isFetching: state.bidder.isFetching,
          selectedBidder: action.payload,
          bidders: state.bidder.bidders
        }
      });
    case FilterActions.REQUEST_BIDDERS:
      return Object.assign({}, state, {
        bidder: {
          isFetching: true,
          selectedBidder: state.bidder.selectedBidder,
          bidders: state.bidder.bidders
        }
      });
    case FilterActions.RECEIVE_BIDDERS:
      return Object.assign({}, state, {
        bidder: {
          isFetching: action.payload.isFetching,
          selectedBidder: state.bidder.selectedBidder,
          bidders: action.payload.bidders
        }
      });
    case FilterActions.CREATIVE_CHANGE:
      return Object.assign({}, state, {
        creativeId: action.payload
      });
    case FilterActions.DEVICE_ID_CHANGE:
      return Object.assign({}, state, {
        deviceId: action.payload
      });
    case FilterActions.DEVICE_TYPE_CHANGE:
      return Object.assign({}, state, {
        deviceTypes: {
          isFetching: state.deviceTypes.isFetching,
          selectedType: action.payload,
          types: state.deviceTypes.types
        }
      });
    case FilterActions.REQUEST_DEVICE_TYPES:
      return Object.assign({}, state, {
        deviceTypes: {
          isFetching: true,
          selectedType: state.deviceTypes.selectedType,
          types: state.deviceTypes.types
        }
      });
    case FilterActions.RECEIVE_DEVICE_TYPES:
      return Object.assign({}, state, {
        deviceTypes: {
          isFetching: action.payload.isFetching,
          selectedType: state.deviceTypes.selectedType,
          types: action.payload.types
        }
      });
    case FilterActions.DOMAIN_CHANGE:
      return Object.assign({}, state, {
        domainValue: action.payload
      });
    case FilterActions.IAB_CHANGE:
      return Object.assign({}, state, {
        iabValue: action.payload
      });
    case FilterActions.STATUS_CHANGE:
      return Object.assign({}, state, {
        statusValue: action.payload
      });
    case FilterActions.LOCATION_STATE_CHANGE:
      return Object.assign({}, state, {
        locationState: action.payload
      });
    case FilterActions.LOCATION_COUNTRY_CHANGE:
      return Object.assign({}, state, {
        locationCountry: action.payload
      });
    case FilterActions.LOCATION_DMA_CHANGE:
      return Object.assign({}, state, {
        locationDMA: action.payload
      });
    case FilterActions.LOCATION_CITY_CHANGE:
      return Object.assign({}, state, {
        locationCity: action.payload
      });
    case FilterActions.LOCATION_ZIP_CHANGE:
      return Object.assign({}, state, {
        locationZip: action.payload
      });
    case FilterActions.RESET_FILTER:
      return Object.assign({}, state, initialFormState);
    default:
      return state;
  }
}

const formAndDateReducer = combineReducers({
  dateRange: DateRangeReducer,
  filterForm: FormReducer
});

function requestReducer(state = initialRequestState, action = null) {
  switch (action.type) {
    case FilterActions.SET_FILTER:
      return Object.assign({}, state, {
        request: action.payload
      });
    case FilterActions.RESET_FILTER:
      return Object.assign({}, state, {
        request: initialRequestState
      });
    default:
      return state;
  }
}

const FilterReducer = combineReducers({
  filter: formAndDateReducer,
  adRequest: requestReducer
});

export default FilterReducer;
