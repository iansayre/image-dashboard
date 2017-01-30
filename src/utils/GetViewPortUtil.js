/**
  * Get ViewPort util
  * @AUTHOR Ian Sayre
  * @CREATED 12/07/2015
*/

function GetViewPort() {
  let inner = 'inner';
  let win = window;

  if (!window.innerWidth) {
    inner = 'client';
    win = document.documentElement || document.body;
  }
  return {
    width: win[inner + 'width'],
    height: win[inner + 'height'],
  };
}

export default {
  GetViewPort,
};
