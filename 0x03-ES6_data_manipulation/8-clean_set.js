/**
 * function that returns a string of all the set values that start
 * with a specific string (startString).
 * @param {Set} set
 * @param {String} startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (
    !startString || !(set instanceof Set)
    || typeof startString !== 'string'
    || !set
  ) {
    return '';
  }
  const result = [];
  for (const elem of set) {
    if (elem.startsWith(startString) && typeof elem === 'string') {
      result.push(elem.slice(startString.length));
    }
  }
  return result.join('-');
}
