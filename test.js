'use strong';

const requireFromString = require('require-from-string');
const rollup = require('rollup').rollup;
const test = require('tape');

function runTest(description, arrayIncludesAll) {
  test(description, t => {
    t.equal(arrayIncludesAll.name, 'arrayIncludesAll', 'should have a function name.');

    t.strictEqual(
      arrayIncludesAll([1, 2, 3], [1, 2]),
      true,
      'should return true if a given array includes all values.'
    );

    t.strictEqual(
      arrayIncludesAll([1, 2, 3], [1, 2, 4]),
      false,
      'should return true if a given array doesn\'t include all values.'
    );

    t.strictEqual(
      arrayIncludesAll([1, 2], [1, 2], 1),
      false,
      'should support the third `fromIndex` argument.'
    );

    t.strictEqual(
      arrayIncludesAll([], [1]),
      false,
      'should return false if the first argument is an empty array.'
    );

    t.throws(
      () => arrayIncludesAll(1, [1]),
      /TypeError.*1 is not an array\. The first argument of array-includes-all must be an array\./,
      'should throw a type error when the first argument is not an array.'
    );

    t.throws(
      () => arrayIncludesAll([1], '1'),
      /TypeError.*1 is not an array\. The second argument of array-includes-all must be an array\./,
      'should throw a type error when the second argument is not an array.'
    );

    t.throws(
      () => arrayIncludesAll([1], []),
      /RangeError:.*must include at least one value, but recieved an empty array\./,
      'should throw a range error when the second argument is an empty array.'
    );

    t.end();
  });
}

runTest('require(\'array-includes-all\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.arrayIncludesAll', global.window.arrayIncludesAll);

rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});

