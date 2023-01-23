export default function createEmployeesObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };
}
