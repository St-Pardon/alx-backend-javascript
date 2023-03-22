# 0x05. NodeJS Basics
![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230320%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230320T114841Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=99473edfd1337f431b9609109a793a19479eb79441fea3cbea10f120ef1b68d0)

## Tasks
### [0. Executing basic javascript with Node JS](./0-console.js)

In the file [0-console.js](./0-console.js), create a function named `displayMessage` that prints in `STDOUT` the string argument.
```sh
user@ubuntu:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

user@ubuntu:~$ node 0-main.js
Hello NodeJS!
user@ubuntu:~$
```
   
### [1. Using Process stdin](./1-stdin.js)

Create a program named [1-stdin.js](./1-stdin.js) that will be executed through command line:

- [x] It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- [x] The user should be able to input their name on a - [x] new line
The program should display `Your name is: INPUT`
- [x] When the user ends the program, it should display `This important software is now closing `(followed by a new line)

**Requirements:**

- Your code will be tested through a child process, make sure you have everything you need for that
```sh
user@ubuntu:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
user@ubuntu:~$ 
user@ubuntu:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
user@ubuntu:~$ 
```
   
### [2. Reading a file synchronously with Node JS](./2-read_file.js)

Using the database [database.csv](./database.csv) (provided in project description), create a function `countStudents` in the file [2-read_file.js](./2-read_file.js)

- [x] Create a function named `countStudents`. It should accept a `path` in argument
- [x] The script should attempt to read the database file synchronously
- [x] If the database is not available, it should throw an error with the text `Cannot load the database`
- [x] If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- [x] It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- [x] CSV file can contain empty lines (at the end) - and they are not a valid student!
```sh
user@ubuntu:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

user@ubuntu:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
user@ubuntu:~$
user@ubuntu:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

user@ubuntu:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
user@ubuntu:~$ 
```