import * as lodash from './src/lodash';

/**
 * @module lodash
 *
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chaining. Methods that operate on and return arrays, collections, and
 * functions can be chained together. Methods that retrieve a single value or
 * may return a primitive value will automatically end the chain sequence and
 * return the unwrapped value. Otherwise, the value must be unwrapped with
 * `_#value`.
 *
 * Explicit chaining, which must be unwrapped with `_#value` in all cases,
 * may be enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, execution is deferred
 * until `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
 * fusion is an optimization strategy which merge iteratee calls; this can help
 * to avoid the creation of intermediate data structures and greatly reduce the
 * number of iteratee executions. Sections of a chain sequence may qualify for
 * shortcut fusion if the section is applied to an array of at least two hundred
 * elements and any iteratees or predicates accept only one argument. The
 * heuristic for whether a section qualifies for shortcut fusion is subject
 * to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`,
 * `at`, `before`, `bind`, `bindAll`, `bindKey`, `chain`, `chunk`, `commit`,
 * `compact`, `concat`, `conforms`,  `constant`, `countBy`, `create`, `curry`,
 * `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`, `difference`,
 * `differenceBy`, `differenceWith`,  `drop`, `dropRight`, `dropRightWhile`,
 * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flip`, `flow`,
 * `flowRight`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
 * `forOwnRight`, `fromPairs`, `functions`, `functionsIn`, `groupBy`, `initial`,
 * `intersection`, `intersectionBy`, `intersectionWith`, invert`, `invokeMap`,
 * `iteratee`, `keyBy`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`,
 * `matches`, `matchesProperty`, `memoize`, `merge`, `mergeWith`, `method`,
 * `methodOf`, `mixin`, `modArgs`, `modArgsSet', `negate`, `nthArg`, `omit`,
 * `omitBy`, `once`, `over`, `overEvery`, `overSome`, `partial`, `partialRight`,
 * `partition`, `pick`, `pickBy`, `plant`, `property`, `propertyOf`, `pull`,
 * `pullAll`, `pullAllBy`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`,
 * `reject`, `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`,
 * `shuffle`, `slice`, `sort`, `sortBy`, `sortByOrder`, `splice`, `spread`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`,
 * `thru`, `toArray`, `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`,
 * `transform`, `unary`, `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`,
 * `uniqWith`, `unset`, `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`,
 * `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`, `zipObject`,
 * and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `deburr`, `endsWith`, `eq`,
 * `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
 * `findLast`, `findLastIndex`, `findLastKey`, `floor`, `get`, `gt`, `gte`,
 * `has`, `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`,
 * `invoke`, `isArguments`, `isArray`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isEqualWith`,
 * `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`, `isMatch`,
 * `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`, `isNumber`,
 * `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`, `isSafeInteger`,
 * `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`, `last`,
 * `lastIndexOf`, `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`,
 * `mean`, `min`, `minBy`, `noConflict`, `noop`, `now`, `pad`, `padEnd`,
 * `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `repeat`,
 * `result`, `round`, `runInContext`, `sample`, `shift`, `size`, `snakeCase`,
 * `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`, `sortedLastIndexBy`,
 * `startCase`, `startsWith`, `subtract`, `sum`, sumBy`, `template`, `times`,
 * `toLower`, `toInteger`, `toLength`, `toNumber`, `toSafeInteger`, toString`,
 * `toUpper`, `trim`, `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`,
 * `upperCase`, `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Chain
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
export default lodash;
