export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const idx of array) {
    res.push(appendString + idx);
  }

  return res;
}
