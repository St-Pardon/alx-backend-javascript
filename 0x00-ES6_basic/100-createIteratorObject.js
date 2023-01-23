export default function createIteratorObject(report) {
  return (function* _() {
    for (const depart of Object.values(report.allEmployees)) {
      for (const employee of depart) {
        yield employee;
      }
    }
  }());
}
