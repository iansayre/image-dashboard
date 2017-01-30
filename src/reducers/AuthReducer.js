import AuthActions from '../actions/AuthActions';


const initialState = {
  audience: null,
  error: '',
  expiresIn: null,
  // isListening: false,
  isVerfied: false,
  token: null,
  user: null
};

function AuthReducer(state = initialState, action = null) {
  switch(action.type) {
    // case AuthActions.LISTEN_FOR_TOKEN_VERIFICATION:
    //   return Object.assign({}, state, {
    //     isListening: action.payload.isListening
    //   })
    case AuthActions.RECEIVE_TOKEN_VERIFICATION:
      return Object.assign({}, state, {
        audience: action.payload.audience,
        expiresIn: action.payload.expiresIn,
        isVerfied: action.payload.isVerfied,
        user: action.payload.user
      })
    case AuthActions.REQUEST_TOKEN_VERIFICATION:
      return Object.assign({}, state, {
        // isListening: action.payload.isListening,
        token: action.payload.token
      })
    case AuthActions.DISCARD_ACCESS_TOKEN:
      return initialState
    case AuthActions.TOKEN_VERIFICATION_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}

export default AuthReducer;
