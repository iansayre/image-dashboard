/* @RETURNS NetworkModalActions
 * @AUTHOR Ian Sayre
 */

const HIDE_NETWORK_MODAL = 'HIDE_NETWORK_MODAL';
const SHOW_NETWORK_MODAL = 'SHOW_NETWORK_MODAL';

function hideNetworkModal() {
  return {
    type: HIDE_NETWORK_MODAL,
    payload: false
  }
}

function showNetworkModal() {
  return {
    type: SHOW_NETWORK_MODAL,
    payload: true
  }
}

export default {
  HIDE_NETWORK_MODAL,
  SHOW_NETWORK_MODAL,
  hideNetworkModal,
  showNetworkModal
}
