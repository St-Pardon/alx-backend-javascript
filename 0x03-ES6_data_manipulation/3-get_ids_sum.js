export default function getStudentIdSum(obj) {
  if (typeof obj !== 'object') return [];
  return obj.reduce((prev, curr) => prev + curr.id, 0);
}
