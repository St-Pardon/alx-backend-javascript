import { readFile } from 'fs';

/**
 * function to open a database, clean and present the data
 * @param {String} path - Path to the file to open
 * @returns promise
 */
function readDatabase(path) {
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

export default readDatabase;
