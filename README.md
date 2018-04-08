# array-includes-all

[![npm version](https://img.shields.io/npm/v/array-includes-all.svg)](https://www.npmjs.com/package/array-includes-all)
[![Build Status](https://travis-ci.org/shinnn/array-includes-all.svg?branch=master)](https://travis-ci.org/shinnn/array-includes-all)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-includes-all.svg)](https://coveralls.io/r/shinnn/array-includes-all)

Check if an [`Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) includes all the elements of another array

```javascript
arrayIncludesAll(['a', 'b', 'c'], ['a', 'b']); //=> true
arrayIncludesAll(['a', 'b', 'c'], ['a', 'b', 'd']); //=> false

arrayIncludesAll([1, 2, NaN], [NaN]); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install array-includes-all
```

## API

```javascript
import arrayIncludesAll from 'array-includes-all';
```

### arrayIncludesAll(*array*, *searchElements* [, *fromIndex*])

*array*: `Array`  
*searchElements*: `Array` (the elements to search for)  
*fromIndex*: `integer` (the position in the array at which to begin searching)  
Return: `boolean`

The API is similar to [`Array.prototype.includes.call`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), except that the second argument takes an array of the elements to search for instead of a single element.

```javascript
arrayIncludesAll([1, 2], [1, 2]); //=> true
arrayIncludesAll([1, 2], [1, 2], 1); //=> false
```

## License

Copyright (c) 2016 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
