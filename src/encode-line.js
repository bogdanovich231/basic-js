const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sum = 1;
  return str.split('').map((char, index, arr) => {
    if (char === arr[index + 1]) {
      sum++;
    } else {
      const result = sum > 1 ? sum + char : char;
      sum = 1;
      return result;
    }
  }).join('');
}

module.exports = {
  encodeLine
};
