/* @RETURNS MarkupModalActions
 * @AUTHOR Ian Sayre
 */

const HIDE_MARKUP_MODAL = 'HIDE_MARKUP_MODAL';
const SHOW_MARKUP_MODAL = 'SHOW_MARKUP_MODAL';

function hideMarkupModal() {
  return {
    type: HIDE_MARKUP_MODAL,
    payload: false
  }
}

function showMarkupModal() {
  return {
    type: SHOW_MARKUP_MODAL,
    payload: true
  }
}

export default {
  HIDE_MARKUP_MODAL,
  SHOW_MARKUP_MODAL,
  hideMarkupModal,
  showMarkupModal
}
