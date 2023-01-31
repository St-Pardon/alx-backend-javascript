/**
 * function that returns a string of all the set values that start
 * with a specific string (startString).
 * @param {Set} set
 * @param {String} startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (!startString) return '';
  const result = [];
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result.push(elem.slice(startString.length));
    }
  }
  return result.join('-');
}
