interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: 'Akanimoh',
  lastName: 'John',
  age: 28,
  location: 'Enugu',
};

const Student2: Student = {
  firstName: 'michael',
  lastName: 'Isaac',
  age: 27,
  location: 'Port Hacort',
};

const studentsList: Student[] = [Student1, Student2];

const styleSheet = `
* {
    margin: 0;
    box-sizing: border-box;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
}
table {
    border-collapse: collapse;
}
thead {
    font-weight: bold;
    background-color: blue;
    color: white;
}
td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
}
td:hover {
    background: gainsboro;
}
td:nth-child(1) {
    text-align: center;
}
tbody tr:nth-child(even) {
    background-color: #f4f4f4;
}
`;

export const showStudent = (students: Array<Student>): void => {
  const body = document.querySelector('body');

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headTr = document.createElement('tr');

  headTr.innerHTML = '<td>Name</td> <td>Location</td>';

  thead.appendChild(headTr);

  for (const student of students) {
    const bodyTr = document.createElement('tr');
    bodyTr.innerHTML = `<td>${student.firstName}</td> <td>${student.location}</td>`;
    tbody.appendChild(bodyTr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(style);
  document.body.appendChild(table);
};

showStudent(studentsList);
document.title = 'Task 0';
const style = document.createElement('style');
style.innerHTML = styleSheet;
document.head.appendChild(style);
