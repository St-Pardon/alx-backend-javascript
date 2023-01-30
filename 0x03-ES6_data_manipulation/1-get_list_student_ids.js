export default function getListStudentIds(obj) {
  if (students instanceof Array) return [];
  return obj.map((item) => item.id);
}
