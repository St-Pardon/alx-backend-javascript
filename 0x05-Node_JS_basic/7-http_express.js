const express = require('express');
const { readFile } = require('fs');

const PORT = 1245;
const app = express();

/**
 * function to open a database, clean and present the data
 * @param {String} path - Path to the file to open
 * @returns promise
 */
function countStudents(path) {
  return new Promise((resolve, reject) => (
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const result = [];
        const list = data.toString('utf-8').trim().split('\n');
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
        result.push(`\nNumber of students: ${list.length - 1}`);
        const key = Object.keys(field);
        for (const i in key) {
          if (i) {
            result.push(
              `Number of students in ${key[i]}: ${field[key[i]]}. List: ${arr
                .filter((item) => item.field === key[i])
                .map((item) => item.firstname)
                .join(', ')}`,
            );
          }
        }
        resolve(result.join('\n'));
      }
    })));
}

app.get('/', (req, res) => {
  res.status(200);
  res.end('Hello Holberton School!');
}).get('/students', (req, res) => {
  res.status(200);
  countStudents('database.csv')
    .then((data) => {
      res.send('This is the list of our students');
      res.end(data);
    })
    .catch((error) => {
      res.end(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http:127.0.0.1:${PORT}`);
});

module.exports = app;
