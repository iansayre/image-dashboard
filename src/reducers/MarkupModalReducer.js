import MarkupModalActions from '../actions/MarkupModalActions';

const initialState = {
  markupModalIsShowing: false
}

const MarkupModalReducer = (state = initialState, action = null) => {
  switch (action.type) {
    case MarkupModalActions.SHOW_MARKUP_MODAL:
      return Object.assign({}, state, {
        markupModalIsShowing: action.payload
      })
    case MarkupModalActions.HIDE_MARKUP_MODAL:
      return Object.assign({}, state, {
        markupModalIsShowing: action.payload
      })
    default:
      return state;
  }
}

export default MarkupModalReducer;
