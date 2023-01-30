export default function getListStudentIds(obj) {
  if (!(obj instanceof Array)) return [];
  return obj.map((item) => item.id);
}
