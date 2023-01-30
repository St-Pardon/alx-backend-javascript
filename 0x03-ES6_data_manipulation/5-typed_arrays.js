/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - length of buffer
 * @param {Number} position - position to change
 * @param {Number} value - value to store in position
 * @author Onu Onyedikachi <http://github.com/St-Pardon>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const res = new DataView(new ArrayBuffer(length), 0, length);
  res.setInt8(position, value);
  return res;
}
