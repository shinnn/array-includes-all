# array-includes-all

[![NPM version](https://img.shields.io/npm/v/array-includes-all.svg)](https://www.npmjs.com/package/array-includes-all)
[![Bower version](https://img.shields.io/bower/v/array-includes-all.svg)](https://github.com/shinnn/array-includes-all/releases)
[![Build Status](https://travis-ci.org/shinnn/array-includes-all.svg?branch=master)](https://travis-ci.org/shinnn/array-includes-all)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/array-includes-all.svg)](https://coveralls.io/r/shinnn/array-includes-all)

Check if an [array](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4) includes all the elements of another array

```javascript
arrayIncludesAll(['a', 'b', 'c'], ['a', 'b']); //=> true
arrayIncludesAll(['a', 'b', 'c'], ['a', 'b', 'd']); //=> false

arrayIncludesAll([1, 2, NaN], [NaN]); //=> true
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install array-includes-all
```

#### [bower](http://bower.io/)

```
bower install array-includes-all
```

## API

### arrayIncludesAll(*array*, *searchElements* [, *fromIndex*])

*array*: `Array`  
*searchElements*: `Array` (the elements to search for)  
*fromIndex*: `Number` (the position in the array at which to begin searching)  
Return: `Boolean`

The API is similar to [`Array.prototype.includes.call`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), except that the second argument takes an array of the elements to search for instead of a single element.

```javascript
arrayIncludesAll([1, 2], [1, 2]); //=> true
arrayIncludesAll([1, 2], [1, 2], 1); //=> false
```

## License

Copyright (c) 2016 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
