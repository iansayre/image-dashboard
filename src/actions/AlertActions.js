/* @RETURNS: ALERT ACTIONS
 * @AUTHOR: Ian Sayre
 */

const HIDE_ALERT_MODAL = 'HIDE_ALERT_MODAL';
const RENDER_ALERT = 'RENDER_ALERT';
const SHOW_ALERT_MODAL = 'SHOW_ALERT_MODAL';

function hideAlertModal() {
  return {
    type: HIDE_ALERT_MODAL,
    payload: false
  }
}

function renderAlert(alertLabel, alertMessage, alertType) {
  return {
    type: RENDER_ALERT,
    payload: {
      label: alertLabel,
      message: alertMessage,
      type: alertType
    }
  }
}

function showAlertModal() {
  return {
    type: SHOW_ALERT_MODAL,
    payload: true
  }
}

export default {
  HIDE_ALERT_MODAL,
  RENDER_ALERT,
  SHOW_ALERT_MODAL,
  hideAlertModal,
  renderAlert,
  showAlertModal
}
