/**
 * Modify values of a map
 * @param {Map<String, Number>} map - Map of items
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((val, key) => {
    if (val === 1) {
      map.set(key, 100);
    }
  });
}
