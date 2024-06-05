"use strict";

/**
 * Find the longest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArr - array of strings
 * @returns {string} - the longest string
 */
function findLongestString(stringArr) {
  let longestString = stringArr[0];
  for (let str of stringArr) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }
  return longestString;
}

module.exports = findLongestString;
