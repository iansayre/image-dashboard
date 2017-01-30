/**
 * Created by chetanv on 23/12/15.
 */

import AuthActions from '../actions/AuthActionTypes';

export default function authStatusMiddleware({ dispatch, getState }) {
  return next => action => {
    if(action.type === AuthActions.CHECK_ACCESS_TOKEN_STATUS) {
      setTimeout(() => dispatch(action), 1000);
    }
    return next(action);
  }
}