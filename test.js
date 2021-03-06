'use strict';

const arrayIncludesAll = require('.');
const test = require('tape');

test('arrayIncludesAll()', t => {
	t.equal(
		arrayIncludesAll([1, 2, 3], [1, 2]),
		true,
		'should return true if a given array includes all values.'
	);

	t.equal(
		arrayIncludesAll([1, 2, 3], [1, 2, 4]),
		false,
		'should return true if a given array doesn\'t include all values.'
	);

	t.equal(
		arrayIncludesAll([1, 2], [1, 2], 1),
		false,
		'should support the third `fromIndex` argument.'
	);

	t.equal(
		arrayIncludesAll([], [1]),
		false,
		'should return false if the first argument is an empty array.'
	);

	t.throws(
		() => arrayIncludesAll(1, [1]),
		/TypeError.*Expected the first argument of array-includes-all to be an array, but got 1 \(number\)\./,
		'should throw a type error when the first argument is not an array.'
	);

	t.throws(
		() => arrayIncludesAll([1], '1'),
		/TypeError.*Expected the second argument of array-includes-all to be an array, but got 1 \(string\)\./,
		'should throw a type error when the second argument is not an array.'
	);

	t.throws(
		() => arrayIncludesAll([1], []),
		/RangeError:.*Expected the second argument of array-includes-all to include at least one value, but recieved an empty array\./,
		'should throw a range error when the second argument is an empty array.'
	);

	t.end();
});
