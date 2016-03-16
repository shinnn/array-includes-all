/*!
 * array-includes-all | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-includes-all
*/
window.arrayIncludesAll = function arrayIncludesAll(arr, searchElms, fromIndex) {
  'use strict';

  if (!Array.isArray(arr)) {
    throw new TypeError(
      String(arr) +
      ' is not an array.' +
      ' The first argument of array-includes-all must be an array.'
    );
  }

  if (!Array.isArray(searchElms)) {
    throw new TypeError(
      String(searchElms) +
      ' is not an array.' +
      ' The second argument of array-includes-all must be an array.'
    );
  }

  if (searchElms.length === 0) {
    throw new RangeError(
      'The second argument of array-includes-all must include at least one value, ' +
      'but recieved an empty array.'
    );
  }

  if (arr.length === 0) {
    return false;
  }

  return searchElms.every(function checkIfArrIncludesElm(elm) {
    return arr.includes(elm, fromIndex);
  });
};
