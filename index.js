'use strict';

var appendType = require('append-type');

/*!
 * array-includes-all | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/array-includes-all
*/

function arrayIncludesAll(arr, searchElms, fromIndex) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected the first argument of array-includes-all to be an array, but got ' + appendType(arr) + '.');
	}

	if (!Array.isArray(searchElms)) {
		throw new TypeError('Expected the second argument of array-includes-all to be an array, but got ' + appendType(searchElms) + '.');
	}

	if (searchElms.length === 0) {
		throw new RangeError('Expected the second argument of array-includes-all to include at least one value, but recieved an empty array.');
	}

	if (arr.length === 0) {
		return false;
	}

	return searchElms.every(function checkIfArrIncludesElm(elm) {
		return arr.includes(elm, fromIndex);
	});
}

module.exports = arrayIncludesAll;
