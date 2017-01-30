/* @RETURNS Filter Actions
 * @AUTHOR Ian Sayre 10/5/16
 */
import fetch from 'isomorphic-fetch';
import AlertActions from './AlertActions';

const AD_TYPE_CHANGE = 'AD_TYPE_CHANGE';
const BIDDER_CHANGE = 'BIDDER_CHANGE';
const REQUEST_BIDDERS = 'REQUEST_BIDDERS';
const RECEIVE_BIDDERS = 'RECEIVE_BIDDERS';
const RECEIVE_BIDDERS_FAILURE = 'RECEIVE_BIDDERS_FAILURE'
const CREATIVE_CHANGE = 'CREATIVE_CHANGE';
const DEVICE_ID_CHANGE = 'DEVICE_ID_CHANGE';
const DEVICE_TYPE_CHANGE = 'DEVICE_TYPE_CHANGE';
const REQUEST_DEVICE_TYPES = 'REQUEST_DEVICE_TYPES';
const RECEIVE_DEVICE_TYPES = 'RECEIVE_DEVICE_TYPES';
const RECEIVE_DEVICE_TYPES_FAILURE = 'RECEIVE_DEVICE_TYPES_FAILURE';
const DOMAIN_CHANGE = 'DOMAIN_CHANGE';
const IAB_CHANGE = 'IAB_CHANGE';
const STATUS_CHANGE = 'STATUS_CHANGE';
const LOCATION_STATE_CHANGE = 'LOCATION_STATE_CHANGE';
const LOCATION_COUNTRY_CHANGE = 'LOCATION_COUNTRY_CHANGE';
const LOCATION_DMA_CHANGE = 'LOCATION_DMA_CHANGE';
const LOCATION_CITY_CHANGE = 'LOCATION_CITY_CHANGE';
const LOCATION_ZIP_CHANGE = 'LOCATION_ZIP_CHANGE';
const RESET_FILTER = 'RESET_FILTER';
const SET_FILTER = 'SET_FILTER';

function adTypeChange(inputVal) {
  return {
    type: AD_TYPE_CHANGE,
    payload: inputVal
  };
}

function bidderChange(inputVal) {
  return {
    type: BIDDER_CHANGE,
    payload: inputVal
  };
}

function requestBidders(url) {
  return {
    type: REQUEST_BIDDERS,
    payload: url
  }
}

function receiveBidders(json) {
  return {
    type: RECEIVE_BIDDERS,
    payload: {
      isFetching: false,
      bidders: json
    }
  }
}

function bidderError(error) {
  const errorAction = {
    type: RECEIVE_BIDDERS_FAILURE,
    payload: {
      message: error.meesage || 'Unable to communicate with the server, please refresh the dashboard.'
    }
  };

  return [
    errorAction,
    AlertActions.renderAlert('ERROR: ', errorAction.payload.meesage, 'warning'),
    AlertActions.showAlertModal()
  ]
}

function fetchBidders(url) {
  return dispatch => {
    dispatch(requestBidders(url));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveBidders(json)))
      .catch(err => dispatch(bidderError(err)))
  }
}

function shouldFetchBidders(state) {
  const bidders = state.adFilter.filter.filterForm.bidder.bidders;

  if (!bidders[0]) {
    return true;
  }

  if (state.adFilter.filter.filterForm.bidder.isFetching) {
    return false;
  }

  return;
}


function fetchBiddersIfNeeded(url) {
  return (dispatch, getState) =>  {
    if (shouldFetchBidders(getState(), url)) {
      return dispatch(fetchBidders(url));
    }
  }
}

function creativeChange(inputVal) {
  return {
    type: CREATIVE_CHANGE,
    payload: inputVal
  };
}

function deviceIdChange(inputVal) {
  return {
    type: DEVICE_ID_CHANGE,
    payload: inputVal
  };
}

function deviceTypeChange(inputVal) {
  return {
    type: DEVICE_TYPE_CHANGE,
    payload: inputVal
  };
}

function domainChange(inputVal) {
  return {
    type: DOMAIN_CHANGE,
    payload: inputVal
  };
}

function requestDeviceTypes(url) {
  return {
    type: REQUEST_DEVICE_TYPES,
    payload: url
  }
}

function receiveDeviceTypes(json) {
  return {
    type: RECEIVE_DEVICE_TYPES,
    payload: {
      isFetching: false,
      types: json
    }
  }
}

function deviceTypeError(error) {
  const typeErrorAction =  {
    type: RECEIVE_DEVICE_TYPES_FAILURE,
    payload: {
      message: error.meesage || 'Unable to communicate with the server, please refresh the dashboard.'
    }
  };

  return [
    typeErrorAction,
    AlertActions.renderAlert('ERROR: ', typeErrorAction.payload.meesage, 'warning'),
    AlertActions.showAlertModal()
  ];
}

function fetchDeviceTypes(url) {
  return dispatch => {
    dispatch(requestDeviceTypes(url));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveDeviceTypes(json)))
      .catch(error => dispatch(deviceTypeError(error)))
  }
}

function shouldFetchDeviceTypes(state) {
  const devTypes = state.adFilter.filter.filterForm.deviceTypes;

  if (!devTypes.types[0]) {
    return true;
  }

  if (devTypes.isFetching) {
    return false;
  }

  return;
}


function fetchDeviceTypesIfNeeded(url) {
  return (dispatch, getState) =>  {
    if (shouldFetchDeviceTypes(getState(), url)) {
      return dispatch(fetchDeviceTypes(url));
    }
  }
}

function iabChange(inputVal) {
  return {
    type: IAB_CHANGE,
    payload: inputVal
  };
}

function statusChange(inputVal) {
  return {
    type: STATUS_CHANGE,
    payload: inputVal
  };
}

function locationStateChange(inputVal) {
  return {
    type: LOCATION_STATE_CHANGE,
    payload: inputVal
  };
}

function locationCountryChange(inputVal) {
  return {
    type: LOCATION_COUNTRY_CHANGE,
    payload: inputVal
  };
}

function locationDMAChange(inputVal) {
  return {
    type: LOCATION_DMA_CHANGE,
    payload: inputVal
  };
}

function locationCityChange(inputVal) {
  return {
    type: LOCATION_CITY_CHANGE,
    payload: inputVal
  };
}

function locationZipChange(inputVal) {
  return {
    type: LOCATION_ZIP_CHANGE,
    payload: inputVal
  };
}

function resetFilter() {
  return {
    type: RESET_FILTER
  };
}

function setFilter(requestString) {
  return {
    type: SET_FILTER,
    payload: requestString
  };
}

export default {
  AD_TYPE_CHANGE,
  BIDDER_CHANGE,
  REQUEST_BIDDERS,
  RECEIVE_BIDDERS,
  RECEIVE_BIDDERS_FAILURE,
  CREATIVE_CHANGE,
  DEVICE_ID_CHANGE,
  DEVICE_TYPE_CHANGE,
  REQUEST_DEVICE_TYPES,
  RECEIVE_DEVICE_TYPES,
  RECEIVE_DEVICE_TYPES_FAILURE,
  DOMAIN_CHANGE,
  IAB_CHANGE,
  STATUS_CHANGE,
  LOCATION_STATE_CHANGE,
  LOCATION_COUNTRY_CHANGE,
  LOCATION_DMA_CHANGE,
  LOCATION_CITY_CHANGE,
  LOCATION_ZIP_CHANGE,
  RESET_FILTER,
  SET_FILTER,
  adTypeChange,
  bidderChange,
  bidderError,
  creativeChange,
  deviceIdChange,
  deviceTypeChange,
  deviceTypeError,
  domainChange,
  fetchBidders,
  fetchBiddersIfNeeded,
  fetchDeviceTypes,
  fetchDeviceTypesIfNeeded,
  iabChange,
  statusChange,
  locationStateChange,
  locationCountryChange,
  locationDMAChange,
  locationCityChange,
  locationZipChange,
  resetFilter,
  setFilter
}
