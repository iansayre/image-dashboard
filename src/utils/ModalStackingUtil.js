/* @RETURNS Logic to stack modals on top of one another
 * @AUTHOR Ian Sayre 08/10/16
 */
import jQuery from 'jQuery';

function modalStack() {
  let tabIndex = 0;
  // for (let i = 0; i < jQuery('.modal').length; i++) {
  //   tabIndex -= 1;
  //   jQuery('.modal')[i].attr('tabindex', tabIndex);
  // }

  jQuery('.modal').each(function() {
    tabIndex -= 1;
    jQuery(this).attr('tabindex', tabIndex);
  })

  jQuery('.modal').on('show.bs.modal', function(event) {
    let idx = jQuery('.modal:visible').length;

    jQuery(this).css('z-index', 1040 + (10 * idx));
  });

  jQuery('.modal').on('shown.bs.modal', function(event) {
    let idx = (jQuery('.modal:visible').length) - 1;

    jQuery('.modal-backdrop').not('.stacked').css('z-index', 1039 + (10 * idx));
    jQuery('.modal-backdrop').not('.stacked').addClass('stacked');
  });
}

export default modalStack;
