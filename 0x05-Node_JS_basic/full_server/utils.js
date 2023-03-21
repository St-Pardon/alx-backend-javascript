import { readFile } from 'fs';

/**
 * function to open a database, clean and present the data
 * @param {String} path - Path to the file to open
 * @returns promise
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    if (path) {
      readFile(path, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const fileLines = data.toString('utf-8').trim().split('\n');
          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1,
          );

          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1,
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }
          resolve(studentGroups);
        }
      });
    }
  });
}

export default readDatabase;
