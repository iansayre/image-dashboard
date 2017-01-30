import push from 'react-router-redux';
import Cookies from 'js-cookie';

// const LISTEN_FOR_TOKEN_VERIFICATION = 'LISTEN_FOR_TOKEN_VERIFICATION';
const DISCARD_ACCESS_TOKEN = 'DISCARD_ACCESS_TOKEN';
const RECEIVE_TOKEN_VERIFICATION = 'RECEIVE_TOKEN_VERIFICATION';
const REQUEST_TOKEN_VERIFICATION = 'REQUEST_TOKEN_VERIFICATION'
const TOKEN_VERIFICATION_FAILED = 'TOKEN_VERIFICATION_FAILED';

function discardAccessToken() {
  return {
    type: DISCARD_ACCESS_TOKEN
  }
}

function receiveTokenVerification(tokenParams) {
  let aud = tokenParams.aud,
      isVerified = tokenParams.isVerified,
      user = tokenParams.email,
      expires = Number(tokenParams.expires_in) * 24;

  Cookies.set('audience', aud, { expires: 1 });
  Cookies.set('isVerified', isVerified, { expires: 1 });
  Cookies.set('user', user, { expires: 1 });

  return {
    type: RECEIVE_TOKEN_VERIFICATION,
    payload: {
      audience: aud,
      expiresIn: expires,
      isVerified: isVerified,
      user: user
    }
  }
}

function requestVerification(token) {
  return {
    type: REQUEST_TOKEN_VERIFICATION,
    payload: {
      // isListening: false,
      token: token
    }
  }
}

function verifyToken(token) {
  return dispatch => {
    dispatch(requestVerification(token))
    return fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=' + token)
      .then(response => response.json())
      .then(json => dispatch(receiveTokenVerification(json)))
      .catch(err => dispatch(verificationFailed(err)))
  }
}

function verificationFailed(err) {
  return {
    type: TOKEN_VERIFICATION_FAILED,
    payload: err
  }
}

export default {
  // LISTEN_FOR_TOKEN_VERIFICATION,
  DISCARD_ACCESS_TOKEN,
  RECEIVE_TOKEN_VERIFICATION,
  REQUEST_TOKEN_VERIFICATION,
  TOKEN_VERIFICATION_FAILED,
  // listenForVerification,
  discardAccessToken,
  receiveTokenVerification,
  requestVerification,
  verifyToken,
  verificationFailed
}
