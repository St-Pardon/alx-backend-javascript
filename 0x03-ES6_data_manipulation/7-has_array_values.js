/**
 * A replication of superSet
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  for (const elem of newSet) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
