/**
 * Created by chetanv on 18/11/15.
 */

const formControlLabelClass = 'form-control-label col-xs-4 col-form-label';
const formGroupClass = 'form-group row';
const formControlClass = 'form-control';
const inputGroupClass = 'input-group';
const inputGroupAddOnClass = 'input-group-addon';
const checkboxClass = 'checkbox';
const dropdownClass = 'dropdown';
const dropdownToggleClass = 'dropdown-toggle';
const dropdownItemClass = 'dropdown-item';
const dropdownDividerClass = 'dropdown-divider';
const buttonClass = 'btn';
const containerClass = 'container';
const rowClass = 'row';
const colClass = 'col';
const offsetClass = 'offset';
const tableClass = 'table';
const cardClass = 'card';
const cardHeaderClass = 'card-header';
const cardBlockClass = 'card-block';
const modalClass = 'modal';
const modalDialogClass = 'modal-dialog';
const modalContentClass = 'modal-content';
const modalHeaderClass = 'modal-header';
const modalTitleClass = 'modal-title';
const modalBodyClass = 'modal-body';
const modalFooterClass = 'modal-footer';
const alertClass = 'alert';
const hiddenClass = 'hidden';
const carouselClass = 'carousel';
const carouselIndicatorClass = 'carousel-indicators';
const carouselInnerClass = 'carousel-inner';
const carouselItemClass = 'carousel-item';
const carouselCaptionClass = 'carousel-caption';
const carouselControlClass = 'carousel-control';
const tabNavClass = 'nav nav-tabs nav-justified';
const navBarClass = 'navbar navbar-default';
const navFixed = 'navbar-fixed';


function getFormControlSizeClass(size) {
  return size === 'large' ? `${formControlClass}-lg` :
    size === 'small' ? `${formControlClass}-sm` :
      null;
}

function getValidFormGroupClass(validState) {
  switch(validState) {
    case 'success': return 'has-success';
    case 'warning': return 'has-warning';
    case 'error': return 'has-danger';
    default: return null;
  }
}

function getValidFormControlClass(validState) {
  switch(validState) {
    case 'success': return 'form-control-success';
    case 'warning': return 'form-control-warning';
    case 'error': return 'form-control-danger';
    default: return null;
  }
}

function getButtonTypeClass(type, outline) {
  return outline ?
    `btn-${type}-outline` :
    `btn-${type}`;
}

function getButtonSizeClass(size) {
  return (size === 'large') ?
    'btn-lg' :
    size === 'small' ?
      'btn-sm' :
      null;
}

function getButtonBlockClass(block) {
  return block ? 'btn-block' : null;
}

function getContainerClass(fluid) {
  return !fluid ?
    containerClass :
    `${containerClass}-fluid`;
}

function getColSizeClass(screenSize, size) {
  return size ? `${colClass}-${screenSize}-${size}` : null;
}

function getColOffsetClass(screenSize, size) {
  return size ? `${offsetClass}-${screenSize}-${size}` : null;
}

// @Params {string, string}
// @Returns hidden-screenSize-up : hidden- screenSize-down class
// @Author Ian Sayre 1/5/16
function getHideSizeClass(screenSize, hideDirection) {
  switch (hideDirection) {
  case 'down':
    return `${hiddenClass}-${screenSize}-down`;
  case 'up':
    return `${hiddenClass}-${screenSize}-up`;
  default:
    return null;
  }
}

function getFixedNavBar(fixed) {
  switch (fixed) {
  case 'top':
    return `${navFixed}-top`;
  case 'bottom':
    return `${navFixed}-bottom`;
  default:
    return null;
  }
}

export default {
  getValidFormGroupClass,
  getValidFormControlClass,
  getFormControlSizeClass,
  getButtonTypeClass,
  getButtonSizeClass,
  getButtonBlockClass,
  getContainerClass,
  getColSizeClass,
  getColOffsetClass,
  getHideSizeClass,
  getFixedNavBar,

  formControlLabelClass,
  formGroupClass,
  formControlClass,
  inputGroupClass,
  inputGroupAddOnClass,
  checkboxClass,
  dropdownClass,
  dropdownToggleClass,
  buttonClass,
  dropdownItemClass,
  dropdownDividerClass,
  containerClass,
  rowClass,
  colClass,
  tableClass,
  cardClass,
  cardHeaderClass,
  cardBlockClass,
  modalClass,
  modalDialogClass,
  modalContentClass,
  modalHeaderClass,
  modalTitleClass,
  modalBodyClass,
  modalFooterClass,
  alertClass,
  carouselClass,
  carouselItemClass,
  carouselCaptionClass,
  carouselIndicatorClass,
  carouselInnerClass,
  carouselControlClass,
  tabNavClass,
  navBarClass
};
