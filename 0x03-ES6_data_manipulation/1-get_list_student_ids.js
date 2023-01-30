export default function getListStudentIds(obj) {
  if (typeof obj !== 'object') return [];
  return obj.map((item) => item.id);
}
