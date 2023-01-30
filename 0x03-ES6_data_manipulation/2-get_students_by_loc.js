export default function getStudentsByLocation(obj, city) {
  if (typeof obj !== 'object') return [];
  return obj.filter((item) => item.location === city);
}
