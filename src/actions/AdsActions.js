/*
 * Ad Actions
 * @AUTHOR Ian Sayre 10/11/16
 */

import jQuery from 'jQuery';
import fetch from 'isomorphic-fetch';
import apiUtil from '../utils/apiUtil';
import AlertActions from './AlertActions';

const REQUEST_ADS = 'REQUEST_ADS';
const RECEIVE_ADS = 'RECEIVE_ADS';
const RECEIVE_ADS_FAILURE = 'RECEIVE_ADS_FAILURE';
const SET_FOCUS_AD = 'SET_FOCUS_AD';
const REQUEST_AD_MARKUP = 'REQUEST_AD_MARKUP';
const RECEIVE_AD_MARKUP = 'RECEIVE_AD_MARKUP';
const REQUEST_NETWORK_CALLS = 'REQUEST_NETWORK_CALLS';
const RECEIVE_NETWORK_CALLS = 'RECEIVE_NETWORK_CALLS';
const UPDATE_AD = 'UPDATE_AD';

function requestAds(url) {
  return {
    type: REQUEST_ADS,
    payload: url
  }
}

function receiveAds(json) {
  const adCount = json[0]['total_count']
  let message = '',
      receiveAction = {};
  if (adCount > 250) {
    message = 'Your search has returned ' + adCount + ' results. The page displays the first 250 results. If you do not see what you are looking for, refine your search.'
    receiveAction = {
      type: RECEIVE_ADS,
      payload: {
        isFetching: false,
        ads: json[1],
        errorMessage: message
      }
    }
    return [
      receiveAction,
      AlertActions.renderAlert('ALERT:', message, 'warning'),
      AlertActions.showAlertModal()
    ];
  }
  else if (adCount == 0) {
    message = 'Your search returned ' + adCount + ' results. You must refine your search and try again.'
    receiveAction = {
      type: RECEIVE_ADS,
      payload: {
        isFetching: false,
        ads: json[1],
        errorMessage: message
      }
    }
    return [
      receiveAction,
      AlertActions.renderAlert('ALERT:', message, 'warning'),
      AlertActions.showAlertModal()
    ];
  }
  else {
    receiveAction = {
      type: RECEIVE_ADS,
      payload: {
        isFetching: false,
        ads: json[1]
      }
    }
    return receiveAction;
  }
}

function AdsError(data, error) {
  const adError = {
    type: RECEIVE_ADS_FAILURE,
    data,
    payload: {
      message: error.meesage || 'Unable to communicate with the server, please refresh the dashboard.'
    }
  };

  return [
    adError,
    AlertActions.renderAlert('ERROR: ', adError.payload.message, 'danger'),
    AlertActions.showAlertModal()
  ];
}

function fetchAds(url) {
  return dispatch => {
    dispatch(requestAds(url));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveAds(json)))
  }
}

function shouldFetchAds(state) {
  const ads = state.ads.ads;

  if (!ads[0]) {
    return true;
  }

  if (state.ads.isFetching) {
    return false;
  }

  return;
}


function fetchAdsIfNeeded(url) {
  return (dispatch, getState) =>  {
    if (shouldFetchAds(getState(), url)) {
      return dispatch(fetchAds(url));
    }
  }
}

function fetchAdMarkup(markupUrl) {
  return dispatch => {
    dispatch(requestMarkup(markupUrl));
    return fetch(markupUrl)
      .then(response => response.text())
      .then(text => dispatch(receiveAdMarkup(text)))
  }
}

function fetchNetworkCalls(networkUrl) {
  return dispatch =>{
    dispatch(requestNetworkCalls(networkUrl));
    return fetch(networkUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveNetworkCalls(json)))
  }
}

function requestMarkup(markupUrl) {
  return {
    type: REQUEST_AD_MARKUP,
    payload: markupUrl
  }
}

function requestNetworkCalls(networkUrl) {
  return {
    type: REQUEST_NETWORK_CALLS,
    payload: networkUrl
  }
}

function setFocusedAd(ad) {
  return {
    type: SET_FOCUS_AD,
    payload: ad
  }
}

function receiveAdMarkup(text) {
  return {
    type: RECEIVE_AD_MARKUP,
    payload: text
  }
}

function receiveNetworkCalls(json) {
  return {
    type: RECEIVE_NETWORK_CALLS,
    payload: json[1]
  }
}

function updateAd(creativeId, reason, status) {
  return {
    type: UPDATE_AD,
    payload: {
      creativeId,
      reason,
      status
    }
  }
}

const updateAPI = (reason, bidder, creativeId, campaignId, status) => {
  return dispatch => {
    jQuery.ajax({
      type: 'POST',
      url: apiUtil.API_POST,
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      data:
        JSON.stringify({
          bidderName: bidder,
          creativeId: creativeId,
          campaignId: campaignId,
          reason: reason,
          status: status
        }),
      success: () => {
        dispatch(updateAd(creativeId, reason, status));
      },
      error: () => {
        dispatch(AdsError(data, err));
      }
    });
  }
}

export default {
  REQUEST_ADS,
  RECEIVE_ADS,
  RECEIVE_ADS_FAILURE,
  SET_FOCUS_AD,
  REQUEST_AD_MARKUP,
  REQUEST_NETWORK_CALLS,
  RECEIVE_AD_MARKUP,
  RECEIVE_NETWORK_CALLS,
  UPDATE_AD,
  fetchAds,
  fetchAdsIfNeeded,
  fetchAdMarkup,
  fetchNetworkCalls,
  setFocusedAd,
  updateAd,
  updateAPI
}
