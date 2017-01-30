/**
 * Created by chetanv on 22/12/15.
 */

import Cookies from 'js-cookie';

class AuthUtil {

  authCookie = '__jssession';

  getAuthFromCookies(auth) {
    const authFromCookie = Cookies.getJSON(this.authCookie);
    if(authFromCookie) {
      return auth.merge({
        username: authFromCookie.u,
        accessToken: authFromCookie.a,
        refreshToken: authFromCookie.r,
        status: 'Authenticated'
      });
    } else {
      return auth;
    }
  }

  setAuthToCookies(auth, keepSignedIn) {
    Cookies.set(this.authCookie, {
      u: auth.get('username'),
      a: auth.get('accessToken'),
      r: auth.get('refreshToken')
    }, keepSignedIn ? { expires: 7 } : undefined);
  }

  deleteAuthCookie() {
    Cookies.remove(this.authCookie);
  }

  authExists() {
    return !!Cookies.getJSON(this.authCookie);
  }
}

export default new AuthUtil();
