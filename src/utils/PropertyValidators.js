/**
 * Created by chetanv on 26/11/15.
 */

import moment from 'moment';

const checkMomentProp = (props, propName, componentName) => {
  const valid = moment().isValid(props[propName]);
  if(!valid) {
    return new Error(`Component ${componentName} expects value of property ${propName} as a moment object.`);
  }
};


export default {
  checkMomentProp,
};