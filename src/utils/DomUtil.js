/**
 * Created by chetanv on 18/11/15.
 */
import React, { Children, isValidElement } from 'react';


let currentId = 1;

function generateId() {
  return `element_${currentId++}`;
}

/**
 * count the number of children in a node
 * @AUTHOR Ian Sayre 1/14/16
 */
function numberOfChildren(children) {
  let kiddos = 0;

  Children.forEach(Children, child => {
    if (isValidElement(child)) {
      kiddos++;
    }
  });

  return kiddos;
}

export default {
  generateId,
  numberOfChildren,
};
