/* @RETURNS HelpModalActions
 * @AUTHOR Ian Sayre
 */

const SHOW_HELP_MODAL = 'SHOW_HELP_MODAL';

function showHelpModal(helpLink) {
  const docHeight = screen.height;
  const docWidth = document.documentElement.clientWidth;
  window.open(helpLink, 'scrollbars=no,toolbar=no,location=no,titlebar=non,directories=no,status=no,menubar=no', 'width=640, height=' + docHeight + ', top=0 left=' + (docWidth - 640));
  return {
    type: SHOW_HELP_MODAL,
    payload: {
      helpLink: helpLink
    }
  }
}

export default {
  SHOW_HELP_MODAL,
  showHelpModal
}
