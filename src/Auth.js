/**
 * Created by chetanv on 18/12/15.
 */

class Auth {
  requestAccessToken(username, password) {
    if(username === 'admin' && password === 'admin') {
      return Promise.resolve({
        accessToken: `dummy_access_token_for_${username}`,
        refreshToken: `dummy_refresh_token_for_${username}`
      });
    } else {
      return Promise.reject({
        accessToken: null,
        refreshToken: null,
        error: 'Invalid username or password'
      });
    }
  }

  refreshAccessToken(username, refreshToken) {
    if(refreshToken === `dummy_refresh_token_for_${username}`) {
      return Promise.resolve({
        accessToken: `another_dummy_access_token_for_${username}`,
        refreshToken: `dummy_refresh_token_for_${username}`
      });
    } else {
      return Promise.reject({
        accessToken: null,
        refreshToken: null,
        error: 'Invalid refresh token'
      });
    }
  }
}


export default new Auth();
