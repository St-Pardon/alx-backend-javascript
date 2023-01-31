# 0x03. ES6 data manipulation
![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230130T092731Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=50dd955612b2fdf889b3491749596fdb8e8ce3c88822554c26c8ecff2606b7ad)

## Tasks
### [0. Basic list of objects](./0-get_list_students.js)
Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

- [x] `Guillaume`, id: `1`, in `San Francisco`
- [x] `James`, id: `2`, in `Columbia`
- [x] `Serena`, id: `5`, in `San Francisco`

```sh
$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

~$ 
~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
~$ 
```

### [1. More mapping](./1-get_list_student_ids.js)
Create a function `getListStudentIds` that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.
```sh
~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

~$ 
~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
~$ 
```


### [2. Filter]()
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.
```sh
~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

~$ 
~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
~$ 
```

### [3. Reduce](./3-get_ids_sum.js)
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.
```sh
~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

~$ 
~$ npm run dev 3-main.js 
8
~$
```


### [4. Combine](./4-update_grade_by_city.js)
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters.

`newGrades` is an array of objects with this format:
```js
  {
    studentId: 31,
    grade: 78,
  }
  ```
If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.
```sh
~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

~$ 
~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
~$ 
```

### [5. Typed Arrays](./5-typed_arrays.js)
Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.
```sh
~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

~$ 
~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
~$ 
```


