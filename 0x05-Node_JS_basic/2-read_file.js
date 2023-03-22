const { readFileSync, existsSync } = require('fs');

function countStudents(path) {
  if (!existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = readFileSync(path, 'utf8').toString('utf8').trim(' ');
  const list = data.split('\n');
  const field = {};
  const head = list[0].split(',');
  const arr = [];
  for (const i in list) {
    if (i !== '0') {
      const obj = {};
      const item = list[i].split(',');
      for (const j in item) {
        if (j) {
          if (j === '3' && Object.hasOwn(field, item[j])) {
            field[item[j]] += 1;
          }
          if (j === '3' && !Object.hasOwn(field, item[j])) {
            field[item[j]] = 1;
          }
          obj[head[j]] = item[j];
        }
      }
      arr.push(obj);
    }
  }
  console.log(`Number of students: ${list.length - 1}`);
  const key = Object.keys(field);
  for (const i in key) {
    if (i) {
      console.log(
        `Number of students in ${key[i]}: ${field[key[i]]}. List: ${arr
          .filter((item) => item.field === key[i])
          .map((item) => item.firstname)
          .join(', ')}`,
      );
    }
  }
}

module.exports = countStudents;
