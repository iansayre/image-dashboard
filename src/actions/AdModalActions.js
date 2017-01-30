/* @RETURNS AdModalActions
 * @AUTHOR Ian Sayre
 */
const HIDE_AD_MODAL = 'HIDE_AD_MODAL';
const SHOW_AD_MODAL = 'SHOW_AD_MODAL';
const SHOW_AD_INFO = 'SHOW_AD_INFO';
const SHOW_AD_REASONS = 'SHOW_AD_REASONS';


function hideAdModal() {
  return {
    type: HIDE_AD_MODAL
  }
}

function showAdInfo() {
  return {
    type: SHOW_AD_INFO
  }
}

function showAdReasons() {
  return {
    type: SHOW_AD_REASONS
  }
}

function showAdModal() {
  return {
    type: SHOW_AD_MODAL
  }
}

export default {
  HIDE_AD_MODAL,
  SHOW_AD_INFO,
  SHOW_AD_MODAL,
  SHOW_AD_REASONS,
  hideAdModal,
  showAdInfo,
  showAdModal,
  showAdReasons
}
