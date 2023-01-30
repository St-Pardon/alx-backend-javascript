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