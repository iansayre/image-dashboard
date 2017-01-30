import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import querystring from 'querystring';

const buildCredentials = (location, keys) => {
  const params = getAllParams(location);

  let authHeaders = {};

  for (let key of keys) {
    authHeaders[key] = params[keys];
  }

  return normalizeTokenKeys(authHeaders);
}

const getAnchorQs = (location) => {
  const anchorQs = getAnchorSearch(location);

  let anchorQsObj = (anchorQs) ? querystring.parse(anchorQs) : {};

  return anchorQsObj
}

const getAnchorSearch = (location) => {
  const rawAnchor = location.anchor || '';

  let arr = rawAnchor.split('?');

  return (arr.length > 1) ? arr[1] : null;
}

const getLocationWithoutParams = (currentLocation, keys) => {
  let newSearch   = querystring.stringify(stripKeys(getSearchQs(currentLocation), keys)),
      newAnchorQs = querystring.stringify(stripKeys(getAnchorQs(currentLocation), keys)),
      newAnchor   = (currentLocation.hash || '').split('?')[0];

  if (newSearch) {
    newSearch = '?' + newSearch;
  }
  if (newAnchorQs) {
    newAnchor = '?' + newAnchorQs;
  }
  if (newAnchor && !newAnchor.match(/^#/)) {
    newAnchor = '#/' + newAnchor;
  }

  let newLocation = currentLocation.pathname + newSearch + newAnchor;

  return newLocation;
}

const getSearchQs = (location) => {
  const rawQs = location.search || '';

  let qs = rawQs.replace('?', ''),
      qsObj = (qs) ? querystring.parse(qs) : {};

  return qsObj;
}

const stripKeys = (obj, keys) => {
  for (let q in keys) {
    delete obj[keys[q]];
  }

  return obj;
}

export const getAllParams = (location) => {
    return Object.assign({}, getAnchorSearch(location), getSearchQs(location));
}

export const getRedirectInfo = (currentLocation) => {
  if (!currentLocation) {
    return {};
  }
  else {
    let authKeys = [
      'access_token',
      'token',
      'auth_token',
      'config',
      'client',
      'client_id',
      'expiry',
      'uid',
      'reset_password',
      'account_confirmation_success'
    ];

    const authRedirectHeaders = buildCredentials(currentLocation, authKeys);
    const authRedirectPath = getLocationWithoutParams(currentLocation, authKeys);

    if (authRedirectPath !== currentLocation) {
      return {
        authRedirectHeaders,
        authRedirectPath
      };
    }
    else {
      return {};
    }
  }
}

export const normalizeTokenKeys = (params) => {
  if (params.token) {
    params['access_token'] = params.token;
    delete params.token;
  }
  if (params.auth_token) {
    params['access_token'] = params.auth_token;
    delete params.auth_token;
  }
  if (params.client_id) {
    params.client = params.client_id;
    delete params.client_id;
  }
  if (params.config) {
    params.endpointKey = params.config;
    delete params.config;
  }

  return params;
}
